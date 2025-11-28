import { Locale } from 'i18n/routing';
import z from 'zod';

import { validateCreditCard, validateExpiry } from '@/lib/helper';

// Zod schema for Step One
export const stepOneSchema = z.object({
  full_name: z.string().min(2, 'Full name is required'),
  birthday: z.string().min(1, 'Date of birth is required'),
  number: z.string().min(1, 'Contact number is required'),
  country: z.string().min(1, 'Country of residence is required'),
  gender: z.string().min(1, 'Gender is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  email: z.string().email('Valid email is required'),
  depart: z.string().min(1, 'Departure city is required'),
  photo: z
    .any()
    .refine((files) => files?.length > 0, 'Profile photo is required'),
  passport: z
    .any()
    .refine((files) => files?.length > 0, 'Passport/ID is required'),
  visa: z.boolean(),
  personal_data: z
    .boolean()
    .refine(
      (val) => val === true,
      'You must agree to processing of personal data'
    ),
});

export type StepOneData = z.infer<typeof stepOneSchema> & {
  hasPhoto?: boolean;
  hasPassport?: boolean;
  photoName?: string;
  passportName?: string;
};

// Zod schema for Step Two
export const stepTwoSchema = z.object({
  experience: z
    .string()
    .min(50, 'Please provide at least 50 characters for your background')
    .max(1500, 'Background overview must be 250 words or less')
    .refine((val) => val.trim().split(/\s+/).length <= 250, {
      message: 'Background overview must be 250 words or less',
    }),
  motivation: z
    .string()
    .min(50, 'Please provide at least 50 characters for your motivation')
    .max(1500, 'Motivation must be 250 words or less')
    .refine((val) => val.trim().split(/\s+/).length <= 250, {
      message: 'Motivation must be 250 words or less',
    }),
  future_goals: z
    .string()
    .min(50, 'Please provide at least 50 characters for your future goals')
    .max(1500, 'Future goals must be 250 words or less')
    .refine((val) => val.trim().split(/\s+/).length <= 250, {
      message: 'Future goals must be 250 words or less',
    }),
  socials: z.string().optional().or(z.literal('')),
  source: z
    .string()
    .min(1, 'Please tell us where you heard about Capital of Tomorrow'),
});

export type StepTwoData = z.infer<typeof stepTwoSchema>;

// Zod schema for Step Three
export const stepThreeSchema = z.object({
  declaration: z.boolean().refine((val) => val === true, {
    message:
      'You must accept the declaration and terms & conditions to proceed',
  }),
});

export type StepThreeData = z.infer<typeof stepThreeSchema>;

// Zod schema for Step Four (Payment)
export const stepFourSchema = z.object({
  full_name_card: z
    .string()
    .min(2, 'Full name as per card is required')
    .max(50, 'Name is too long'),

  card_number: z
    .string()
    .min(1, 'Credit/Debit card number is required')
    .refine((val) => validateCreditCard(val), {
      message: 'Please enter a valid credit/debit card number',
    }),

  expiry: z
    .string()
    .min(1, 'Expiry date is required')
    .regex(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      'Please enter expiry in MM/YY format'
    )
    .refine((val) => validateExpiry(val), {
      message: 'Expiry date must be in the future',
    }),

  cvc: z
    .string()
    .min(3, 'CVC is required')
    .max(4, 'CVC must be 3 or 4 digits')
    .regex(/^[0-9]{3,4}$/, 'CVC must contain only numbers'),

  payment_consent: z.boolean().refine((val) => val === true, {
    message:
      'You must agree to the processing of your personal data and payment information',
  }),
});

export type StepFourData = z.infer<typeof stepFourSchema>;

export type StepComponentProps<T> = {
  onNext: (data: T) => void;
  onPrevious: VoidFunction;
  defaultValues?: Partial<T>;
  isVip?: boolean;
  locale?: Locale;
};
