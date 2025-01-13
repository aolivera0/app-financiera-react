export function calcularCuota(
  monto: number,
  tasaInteresReal: number,
  tiempo: number
) {
  return (monto * tasaInteresReal) / (1 - (1 + tasaInteresReal) ** -tiempo);
}
