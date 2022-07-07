export const formatCurrency = (currency: number | bigint): string =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD"
  }).format(currency!);
