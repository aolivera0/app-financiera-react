import { Fila } from './Fila.tsx';
import { calcularTasaParaUsar } from '../utils/calcularTasaParaUsar.ts';
import { formatear } from '../utils/formatear.ts';
import { calcularCuota } from '../utils/calcularCuota.ts';
import { useEffect } from 'react';
import { Info } from '../App.tsx';

export function TablaResultados({
  info,
  setInfo,
}: {
  info: Info;
  setInfo: (info: Info) => void;
}) {
  const {
    monto,
    tiempo,
    selectedPeriodicidad,
    tasaInteres,
    selectedTipoInteres,
  } = info;

  const tasaInteresReal = calcularTasaParaUsar(
    selectedPeriodicidad,
    selectedTipoInteres,
    tasaInteres
  );

  const cuota = calcularCuota(monto, tasaInteresReal, tiempo);

  let saldoInicial = monto;
  let totalAportesCapital = 0;
  let totalIntereses = 0;
  const filas = [];

  for (let i = 0; i < tiempo; i++) {
    const interesPeriodo = saldoInicial * tasaInteresReal;
    const aporteCapitalPeriodo = cuota - interesPeriodo;

    filas.push(
      <Fila
        key={i}
        periodo={i + 1}
        cuota={cuota}
        saldoInicial={saldoInicial}
        intereses={interesPeriodo}
        abonoCapital={aporteCapitalPeriodo}
        saldoFinal={saldoInicial - aporteCapitalPeriodo}
      />
    );

    saldoInicial = saldoInicial - aporteCapitalPeriodo;
    totalAportesCapital += aporteCapitalPeriodo;
    totalIntereses += interesPeriodo;
  }

  useEffect(() => {
    setInfo({
      ...info,
      totalAportesCapital: totalAportesCapital,
      totalIntereses: totalIntereses,
    });
  }, [info]);

  return (
    <table>
      <thead>
        <th>Periodo</th>
        <th>Saldo inicial</th>
        <th>Cuota</th>
        <th>Aporte a capital</th>
        <th>Intereses</th>
        <th>Saldo final</th>
      </thead>

      <tbody>{filas}</tbody>
      <tfoot>
        <tr>
          <td>-</td>
          <td>-</td>
          <td>{formatear(info.totalAportesCapital + info.totalIntereses)}</td>
          <td>{formatear(info.totalAportesCapital)}</td>
          <td>{formatear(info.totalIntereses)}</td>
          <td>-</td>
        </tr>
      </tfoot>
    </table>
  );
}
