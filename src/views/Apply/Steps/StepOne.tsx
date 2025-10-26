/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Input } from '@/components';
import { Checkbox } from '@/components/Сheckbox/Сheckbox';

import { FormButtons } from '@/app/[locale]/apply/[step]/components';
import {
  StepComponentProps,
  StepOneData,
  stepOneSchema,
} from '@/app/[locale]/apply/[step]/types';
import { PASSPORT_KEY, PHOTO_KEY } from '@/constant/data';
import { getFile, storeFile } from '@/views/Apply/Steps/fileUtils';

const StepOne = ({
  onNext,
  defaultValues,
  ...buttonProps
}: StepComponentProps<StepOneData>) => {
  const t = useTranslations('apply.steps.one');

  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { isValid },
  } = useForm<StepOneData>({
    resolver: zodResolver(stepOneSchema),
    mode: 'onChange',
    defaultValues: {
      full_name: '',
      birthday: '',
      number: '',
      country: '',
      gender: '',
      nationality: '',
      email: '',
      depart: '',
      visa: false,
      personal_data: false,
      ...defaultValues,
    },
  });

  // Load saved files from IndexedDB on component mount
  useEffect(() => {
    const loadSavedFiles = async () => {
      try {
        const savedPhoto = await getFile(PHOTO_KEY);
        const savedPassport = await getFile(PASSPORT_KEY);

        if (savedPhoto) {
          // Create a FileList-like object for the saved file
          const photoFileList = {
            0: savedPhoto,
            length: 1,
            item: (index: number) => (index === 0 ? savedPhoto : null),
            [Symbol.iterator]: function* () {
              yield savedPhoto;
            },
          } as FileList;
          setValue('photo', photoFileList);
        }

        if (savedPassport) {
          // Create a FileList-like object for the saved file
          const passportFileList = {
            0: savedPassport,
            length: 1,
            item: (index: number) => (index === 0 ? savedPassport : null),
            [Symbol.iterator]: function* () {
              yield savedPassport;
            },
          } as FileList;
          setValue('passport', passportFileList);
        }
      } catch (error) {
        console.error('Error loading saved files:', error);
      } finally {
        trigger();
      }
    };

    loadSavedFiles();
  }, [setValue]);

  const onSubmit = async (data: StepOneData) => {
    try {
      // Store files in IndexedDB
      if (data.photo?.[0]) {
        await storeFile(PHOTO_KEY, data.photo[0]);
      }
      if (data.passport?.[0]) {
        await storeFile(PASSPORT_KEY, data.passport[0]);
      }

      // Store form data (excluding files) in localStorage
      const { photo, passport, ...dataWithoutFiles } = data;
      const dataToStore = {
        ...dataWithoutFiles,
        // Store metadata about files for reference
        hasPhoto: !!photo?.[0],
        hasPassport: !!passport?.[0],
        photoName: photo?.[0]?.name,
        passportName: passport?.[0]?.name,
      };

      localStorage.setItem('stepOneData', JSON.stringify(dataToStore));

      onNext(data);
    } catch (error) {
      console.error('Error saving data:', error);
      // You might want to show an error message to the user here
      alert('Error saving files. Please try again.');
    }
  };

  return (
    <>
      <form className='flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-12 lg:gap-40'>
        <div className='contents sm:flex flex-col sm:gap-7 lg:gap-9 w-full'>
          <Controller
            name='full_name'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('full_name')}
                id='full_name'
                autoComplete='name webauthn'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='birthday'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('birthday')}
                id='birthday'
                type='date'
                autoComplete='bday-day webauthn'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='number'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('tel')}
                id='number'
                type='tel'
                autoComplete='tel webauthn'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='country'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('country')}
                id='country'
                autoComplete='country webauthn'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='visa'
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className='order-1 sm:order-[unset] flex gap-4 text-primary-foreground font-mont text-lg md:text-xl'>
                <Checkbox
                  id='visa'
                  checked={value}
                  onCheckedChange={onChange}
                />
                <label htmlFor='visa' className='cursor-pointer'>
                  {t('visa')}
                </label>
              </div>
            )}
          />

          <Controller
            name='personal_data'
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div className='order-2 sm:order-[unset]'>
                <div className='flex gap-4 text-primary-foreground font-mont text-lg md:text-xl'>
                  <Checkbox
                    id='personal_data'
                    checked={value}
                    onCheckedChange={onChange}
                  />
                  <label htmlFor='personal_data' className='cursor-pointer'>
                    {t('personal_data')}
                  </label>
                </div>
                {error && (
                  <p className='font-mont text-red-500 text-sm mt-2'>
                    {error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className='contents sm:flex flex-col sm:gap-7 lg:gap-9 w-full'>
          <Controller
            name='gender'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('gender')}
                id='gender'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='nationality'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('nationality')}
                id='nationality'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='email'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('email')}
                id='email'
                type='email'
                autoComplete='email webauthn'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='depart'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('depart')}
                id='depart'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='photo'
            control={control}
            render={({
              field: { onChange, name, value },
              fieldState: { error },
            }) => (
              <div>
                <Input
                  title={t('photo')}
                  id='photo'
                  name={name}
                  type='file'
                  accept='image/*'
                  onChange={(e) => onChange(e.target.files)}
                />
                {value?.[0] && (
                  <p className='font-mont text-green-600 text-sm mt-1'>
                    {t('photoNotif')} {value[0].name}
                  </p>
                )}
                {error && (
                  <p className='font-mont text-red-500 text-sm mt-2'>
                    {error.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name='passport'
            control={control}
            render={({
              field: { onChange, name, value },
              fieldState: { error },
            }) => (
              <div>
                <Input
                  title={t('passport')}
                  id='passport'
                  name={name}
                  type='file'
                  accept='.pdf,image/*'
                  onChange={(e) => onChange(e.target.files)}
                />
                {value?.[0] && (
                  <p className='font-mont text-green-600 text-sm mt-1'>
                    {t('passportNotif')} {value[0].name}
                  </p>
                )}
                {error && (
                  <p className='font-mont text-red-500 text-sm mt-2'>
                    {error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </form>
      <FormButtons
        numStep={1}
        onNext={handleSubmit(onSubmit)}
        isValid={isValid}
        {...buttonProps}
      />
    </>
  );
};

export default StepOne;
