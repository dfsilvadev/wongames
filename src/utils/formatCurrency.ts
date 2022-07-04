export const formatCurrency = (currency: number | undefined) =>
  currency == 0
    ? "FREE"
    : new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD"
      }).format(currency!);
