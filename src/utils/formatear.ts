export function formatear(valor: number) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      currencyDisplay: 'narrowSymbol',
      maximumFractionDigits: 0,
    }).format(valor);
  }