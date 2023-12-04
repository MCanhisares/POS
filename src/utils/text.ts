const formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

export const formatCurrencyText = (value: number) => {
  return formatter.format(value);
};
