import { Info } from '../App.tsx';

export function Form({
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
  return (
    <form>
      <div>
        <label htmlFor="monto">Monto</label>
        <input
          type="number"
          id="monto"
          value={monto}
          onChange={(e) =>
            setInfo({ ...info, monto: parseFloat(e.target.value) })
          }
        />
      </div>
      <div>
        <label htmlFor="tiempo">Tiempo</label>
        <input
          type="number"
          id="tiempo"
          value={tiempo}
          onChange={(e) =>
            setInfo({ ...info, tiempo: parseInt(e.target.value) })
          }
        />
        <select
          value={selectedPeriodicidad}
          onChange={(e) =>
            setInfo({ ...info, selectedPeriodicidad: e.target.value })
          }
        >
          <option value="meses">Meses</option>
          <option value="dias">Días</option>
          <option value="años">Años</option>
        </select>
      </div>

      <div>
        <label htmlFor="tasa-interes">Tasa de interés</label>
        <input
          type="number"
          id="tasa-interes"
          value={tasaInteres}
          onChange={(e) =>
            setInfo({ ...info, tasaInteres: parseFloat(e.target.value) })
          }
        />
        <select
          name=""
          id="tipo-interes"
          value={selectedTipoInteres}
          onChange={(e) =>
            setInfo({ ...info, selectedTipoInteres: e.target.value })
          }
        >
          <option value="EA">E.A</option>
          <option value="mensual">M.V</option>
          <option value="diaria">Diaria</option>
        </select>
      </div>
    </form>
  );
}
