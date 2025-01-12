import { formatear } from '../utils/formatear.ts';
import { Info } from '../App.tsx';

export function Totales({ info }: { info: Info }) {
  return (
    <div>
      <p>
        Con una tasa de interes del {info.tasaInteres}%{' '}
        {info.selectedTipoInteres} un crédito por {formatear(info.monto)}{' '}
        generará intereses por {formatear(info.totalIntereses)}. Es decir
        terminarás pagando{' '}
        {formatear(info.totalAportesCapital + info.totalIntereses)} al final de
        los {info.tiempo} {info.selectedPeriodicidad}.
      </p>
    </div>
  );
}
