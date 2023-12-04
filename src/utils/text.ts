const formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

export const formatCurrencyText = (value: number) => {
  return formatter.format(value);
};

export const generateRandomId = () => Math.random().toString(16).slice(2);
