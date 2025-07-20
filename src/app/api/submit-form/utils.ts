export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatCardNumber = (cardNumber: string) => {
  return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ****').slice(0, -12) + '****';
};

export const truncateText = (text: string, maxLength = 200) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};
