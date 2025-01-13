import { useState } from 'react';
import '../App.css';
import { Form } from '../components/Form.tsx';
import { TablaResultados } from '../components/TablaResultados.tsx';
import { TotalesMsj } from '../components/TotalesMsj.tsx';
import { getTextoTotales } from '../utils/getTextoTotales.ts';
import { Info, Totales} from '../interfaces.ts'


export function Credito() {
  const [info, setInfo] = useState<Info>({
    monto: 0,
    tiempo: 0,
    tasaInteres: 0,
    selectedPeriodicidad: 'meses',
    selectedTipoInteres: 'mensual',
  });

  const [totales, setTotales] = useState<Totales>({
    totalAportesCapital: 0,
    totalIntereses: 0,
  });

  return (
    <>
      <main>
        <Form info={info} setInfo={setInfo} />
        <TablaResultados
          info={info}
          totales={totales}
          setTotales={setTotales}
        />
        <TotalesMsj>{getTextoTotales(info, totales)}</TotalesMsj>
      </main>
    </>
  );
}
