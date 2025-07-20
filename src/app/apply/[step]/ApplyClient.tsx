/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import { clearSavedData } from '@/lib/utils';

import {
  StepFourData,
  StepOneData,
  StepThreeData,
  StepTwoData,
} from '@/app/apply/[step]/types';
import { ProgressBar, progressStep } from '@/views/Apply/ProgressBar';

const StepOne = dynamic(
  () => import('@/views/Apply/Steps/StepOne').then((res) => res.default),
  {
    ssr: false,
  }
);
const StepTwo = dynamic(
  () => import('@/views/Apply/Steps/StepTwo').then((res) => res.default),
  {
    ssr: false,
  }
);
const StepThree = dynamic(
  () => import('@/views/Apply/Steps/StepThree').then((res) => res.default),
  {
    ssr: false,
  }
);
const StepFour = dynamic(
  () => import('@/views/Apply/Steps/StepFour').then((res) => res.default),
  {
    ssr: false,
  }
);

type ApplyClientProps = {
  numStep: number;
};

// Form data interface
interface FormData {
  stepOne?: StepOneData;
  stepTwo?: StepTwoData;
  stepThree?: StepThreeData;
  stepFour?: StepFourData;
}

const ApplyClient: React.FC<ApplyClientProps> = ({ numStep }) => {
  const router = useRouter();

  // State to store form data from all steps
  const [formData, setFormData] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(true);

  const restartData = () => {
    const stepThreeData = localStorage.getItem('stepThreeData') || '{}';
    const stepTwoData = localStorage.getItem('stepTwoData') || '{}';
    const stepFourData = localStorage.getItem('stepFourData') || '{}';
    const stepOneData = localStorage.getItem('stepOneData') || '{}';
    return {
      ...{ stepOne: JSON.parse(stepOneData) },
      ...{ stepTwo: JSON.parse(stepTwoData) },
      ...{ stepThree: JSON.parse(stepThreeData) },
      ...{ stepFour: JSON.parse(stepFourData) },
    } as FormData;
  };
  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = restartData();

    if (savedData) {
      try {
        setFormData(savedData);
        // setFormData(JSON.parse(savedData));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error loading saved form data:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('applicationFormData', JSON.stringify(formData));
    }
  }, [formData, isLoading]);

  const sendEmail = async (data: FormData) => {
    try {
      setIsLoading(true);
      const completeFormData = {
        ...data.stepOne,
        ...data.stepTwo,
        ...data.stepThree,
        ...data.stepFour,
        submissionDate: new Date().toISOString(),
        submissionId: `APP-${Date.now()}`, // Generate unique ID
      };

      // const requestDataArr = Object.entries(completeFormData);
      // const formData = formDataGenerator(requestDataArr);
      // const savedPhoto = await getFile(PHOTO_KEY);
      // const savedPassport = await getFile(PASSPORT_KEY);

      // formData.append('photo', savedPhoto || '');
      // formData.append('passport', savedPassport || '');

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(completeFormData),
      });

      const result = await response.json();
      if (result.success) {
        clearSavedData();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      alert(error);
      console.error('Error saving form data:', error);
    } finally {
      setIsLoading(false);
      alert('Данные успешно отправлены!');
      // Redirect to success page or show success message
      router.replace('/');
    }
  };

  // Handle navigation to next step with form data
  const handleNext = useCallback(
    <T,>(stepData: T, currentStep: number) => {
      const updatedFormData = {
        ...formData,
        [`step${['One', 'Two', 'Three', 'Four'][currentStep - 1]}`]: stepData,
      };

      setFormData(updatedFormData);

      // Navigate to next step
      if (currentStep < 4) {
        router.push(`/apply/${currentStep + 1}`);
      } else {
        sendEmail(updatedFormData);
      }
    },
    [formData, router]
  );

  // Handle navigation to previous step
  const handlePrevious = useCallback(() => {
    if (numStep > 1) {
      router.push(`/apply/${numStep - 1}`);
    }
  }, [numStep]);

  // Check if user can access current step (has completed previous steps)
  const canAccessStep = (step: number): boolean => {
    if (step === 1) return true;

    const requiredSteps = [
      'stepOne',
      'stepTwo',
      'stepThree',
      'stepFour',
    ] as const;
    for (let i = 0; i < step - 1; i++) {
      if (!formData[requiredSteps[i]]) {
        return false;
      }
    }
    return true;
  };

  // Redirect to first incomplete step if accessing invalid step
  useEffect(() => {
    if (!isLoading && !canAccessStep(numStep)) {
      // Find the first incomplete step
      let redirectStep = 1;
      if (formData.stepOne) redirectStep = 2;
      if (formData.stepTwo) redirectStep = 3;
      if (formData.stepThree) redirectStep = 4;

      router.push(`/apply/${redirectStep}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numStep, formData, isLoading, router]);

  if (isLoading) {
    return (
      <section className='font-monda text-lg text-white container flex items-center justify-center min-h-[400px]'>
        <div className='text-center'>Loading...</div>
      </section>
    );
  }

  // Don't render if user can't access this step
  if (!canAccessStep(numStep)) {
    return null;
  }

  const stepComponent: Record<number, React.ReactElement> = {
    1: (
      <StepOne
        onNext={(data) => handleNext(data, 1)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepOne}
      />
    ),
    2: (
      <StepTwo
        onNext={(data) => handleNext(data, 2)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepTwo}
      />
    ),
    3: (
      <StepThree
        onNext={(data) => handleNext(data, 3)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepThree}
      />
    ),
    4: (
      <StepFour
        onNext={(data) => handleNext(data, 4)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepFour}
      />
    ),
  };

  return (
    <section className='container flex flex-col gap-8 md:gap-12 sm:gap-20'>
      <ProgressBar step={numStep as keyof typeof progressStep} />
      {stepComponent[numStep]}
    </section>
  );
};

export default ApplyClient;
