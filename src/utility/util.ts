export const formatCurrencyToEuro = (value: number) => {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};
