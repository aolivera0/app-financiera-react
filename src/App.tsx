import { useState } from 'react';
import './App.css';
import { Form } from './components/Form.tsx';
import { TablaResultados } from './components/TablaResultados.tsx';

function App() {
  const [monto, setMonto] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [selectedPeriodicidad, setSelectedPeriodicidad] = useState('meses');
  const [selectedTipoInteres, setSelectedTipoInteres] = useState('mensual');

  return (
    <>
      <h1>App Financiera</h1>
      <Form
        monto={monto}
        setMonto={setMonto}
        tiempo={tiempo}
        setTiempo={setTiempo}
        tasaInteres={tasaInteres}
        setTasaInteres={setTasaInteres}
        selectedPeriodicidad={selectedPeriodicidad}
        setSelectedPeriodicidad={setSelectedPeriodicidad}
        selectedTipoInteres={selectedTipoInteres}
        setSelectedTipoInteres={setSelectedTipoInteres}
      />

      <TablaResultados
        monto={monto}
        tiempo={tiempo}
        tasaInteres={tasaInteres}
        selectedPeriodicidad={selectedPeriodicidad}
        selectedTipoInteres={selectedTipoInteres}
      />
    </>
  );
}

export default App;