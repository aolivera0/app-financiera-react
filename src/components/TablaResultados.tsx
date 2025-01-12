import { Fila } from './Fila.tsx';

export function TablaResultados({
    monto,
    tiempo,
    selectedPeriodicidad,
    tasaInteres,
    selectedTipoInteres,
}: {
    monto: number;
    tiempo: number;
    selectedPeriodicidad: string;
    tasaInteres: number;
    selectedTipoInteres: string;
}) {
    let tasaInteresReal: number;

    if (selectedPeriodicidad == 'meses') {
        selectedTipoInteres == 'EA'
            ? (tasaInteresReal = (1 + tasaInteres / 100) ** (1 / 12) - 1)
            : selectedTipoInteres == 'diaria'
                ? (tasaInteresReal = (1 + tasaInteres / 100) ** 30 - 1)
                : (tasaInteresReal = tasaInteres / 100);
    } else if (selectedPeriodicidad == 'dias') {
        selectedTipoInteres == 'EA'
            ? (tasaInteresReal = (1 + tasaInteres / 100) ** (1 / 360) - 1)
            : selectedTipoInteres == 'mensual'
                ? (tasaInteresReal = (1 + tasaInteres / 100) ** (1 / 30) - 1)
                : (tasaInteresReal = tasaInteres / 100);
    } else {
        selectedTipoInteres == 'mensual'
            ? (tasaInteresReal = (1 + tasaInteres / 100 / 12) ** 11)
            : selectedTipoInteres == 'diaria'
                ? (tasaInteresReal = (1 + tasaInteres / 100 / 360) ** 359)
                : (tasaInteresReal = tasaInteres / 100);
    }

    const cuota =
        (monto * tasaInteresReal) / (1 - (1 + tasaInteresReal) ** -tiempo);
    let saldoInicial = monto;
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
    }

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
            <tfoot></tfoot>
        </table>
    );
}