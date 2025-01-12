import { formatear } from '../utils/formatear.ts';

export function Fila({
  periodo,
  cuota,
  saldoInicial,
  saldoFinal,
  intereses,
  abonoCapital,
}: {
  periodo: number;
  cuota: number;
  saldoInicial: number;
  saldoFinal: number;
  intereses: number;
  abonoCapital: number;
}) {
  return (
    <tr>
      <td>{periodo}</td>
      <td>{formatear(saldoInicial)}</td>
      <td>{formatear(cuota)}</td>
      <td>{formatear(abonoCapital)}</td>
      <td>{formatear(intereses)}</td>
      <td>{formatear(Math.abs(saldoFinal))}</td>
    </tr>
  );
}
