/* eslint-disable no-console */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { PASSPORT_KEY, PHOTO_KEY } from '@/constant/data';
import { deleteFile } from '@/views/Apply/Steps/fileUtils';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormDataItem = [string, string | Blob | number | undefined | null];

export const formDataGenerator = (params: FormDataItem[], isAppend = false) => {
  const formData = new FormData();

  params.forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const valueString = typeof value === 'number' ? value.toString() : value;
      if (isAppend) {
        formData.append(key, valueString);
      } else {
        formData.set(key, valueString);
      }
    }
  });

  return formData;
};

// Function to clear saved data (useful for testing or reset functionality)
export const clearSavedData = async () => {
  try {
    await deleteFile(PHOTO_KEY);
    await deleteFile(PASSPORT_KEY);
    localStorage.removeItem('applicationFormData');
    localStorage.removeItem('stepOneData');
    localStorage.removeItem('stepTwoData');
    localStorage.removeItem('stepThreeData');
    localStorage.removeItem('stepFourData');
    console.log('Saved data cleared successfully');
  } catch (error) {
    console.error('Error clearing saved data:', error);
  }
};
