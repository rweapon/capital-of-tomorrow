export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

// Helper function to validate credit card number using Luhn algorithm
export const validateCreditCard = (cardNumber: string): boolean => {
  // Remove spaces and non-digits
  const cleanNumber = cardNumber.replace(/\D/g, '');

  // Check if it's a valid length (13-19 digits)
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false;
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

// Helper function to validate expiry date
export const validateExpiry = (expiry: string): boolean => {
  const match = expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/);
  if (!match) return false;

  const month = parseInt(match[1]);
  const year = parseInt(match[2]) + 2000;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // Check if the expiry date is in the future
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }

  return true;
};
