import { Fila } from './Fila.tsx';
import { calcularTasaParaUsar } from '../utils/calcularTasaParaUsar.ts';
import { formatear } from '../utils/formatear.ts';
import { calcularCuota } from '../utils/calcularCuota.ts';
import { useEffect } from 'react';
import { Info, Totales } from '../interfaces.ts'

export function TablaResultados({
  info,
  totales,
  setTotales,
}: {
  info: Info;
  totales: Totales;
  setTotales: (totales: Totales) => void;
}) {
  const {
    monto,
    tiempo,
    selectedPeriodicidad,
    tasaInteres,
    selectedTipoInteres,
  } = info;

  const tasaInteresReal = calcularTasaParaUsar(
    selectedTipoInteres,
    tasaInteres
  );

  let periodos = selectedPeriodicidad == 'años' ? tiempo * 12 : tiempo;
  const cuota = calcularCuota(monto, tasaInteresReal, periodos);

  let saldoInicial = monto;
  let totalAportesCapital = 0;
  let totalIntereses = 0;
  const filas = [];

  for (let i = 0; i < periodos; i++) {
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
    setTotales({
      ...totales,
      totalAportesCapital: totalAportesCapital,
      totalIntereses: totalIntereses,
    });
  }, [info]);

  return (
    <section className="wrapper">
      <h3>Tabla de resultados</h3>
      <table className="tabla-resultados">
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
            <td>
              {formatear(totales.totalAportesCapital + totales.totalIntereses)}
            </td>
            <td>{formatear(totales.totalAportesCapital)}</td>
            <td>{formatear(totales.totalIntereses)}</td>
            <td>-</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
