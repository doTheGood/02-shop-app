export function formatMoney(value: number) {
  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: 2
  });
}
