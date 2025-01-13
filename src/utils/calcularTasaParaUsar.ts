export function calcularTasaParaUsar(
  selectedTipoInteres: string,
  tasaInteres: number
) {
  return selectedTipoInteres == 'EA'
    ? tasaInteres / 100 / 12
    : selectedTipoInteres == 'diaria'
    ? (1 + tasaInteres / 100) ** 30 - 1
    : tasaInteres / 100;
}
