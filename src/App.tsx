import { useState } from 'react';
import './App.css';
import { Form } from './components/Form.tsx';
import { TablaResultados } from './components/TablaResultados.tsx';
import { Totales } from './components/Totales.tsx';

export type Info = {
  monto: number;
  tiempo: number;
  tasaInteres: number;
  selectedPeriodicidad: string;
  selectedTipoInteres: string;
  totalAportesCapital: number;
  totalIntereses: number;
};

function App() {
  const [info, setInfo] = useState<Info>({
    monto: 0,
    tiempo: 0,
    tasaInteres: 0,
    selectedPeriodicidad: 'meses',
    selectedTipoInteres: 'mensual',
    totalAportesCapital: 0,
    totalIntereses: 0,
  });
  return (
    <>
      <h1>App Financiera</h1>
      <Form info={info} setInfo={setInfo} />
      <TablaResultados info={info} setInfo={setInfo} />
      <Totales info={info} />
    </>
  );
}

export default App;
