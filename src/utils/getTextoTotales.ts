import { Info, Totales } from '../interfaces.ts';
import { formatear } from './formatear.ts';

export function getTextoTotales(info: Info, totales: Totales) {
  return `Con una tasa de interes del ${info.tasaInteres}% 
  ${info.selectedTipoInteres} un crédito por ${formatear(info.monto)}
  generará intereses por ${formatear(totales.totalIntereses)}. Es decir
  terminarás pagando ${formatear(
    totales.totalAportesCapital + totales.totalIntereses
  )} al
  final de los ${info.tiempo} ${info.selectedPeriodicidad}.`;
}
