import { Info } from '../interfaces';

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
    <section className="wrapper">
      <form className="form">
        <h2>Calculadora de crédito</h2>
        <div className="form-field">
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
        <div className="form-field">
          <label htmlFor="tiempo">Tiempo</label>
          <div className="form-field__group">
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
              <option value="años">Años</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="tasa-interes">Tasa de interés</label>
          <div className="form-field__group">
            <input
              type="number"
              maxLength={2}
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
        </div>
      </form>
    </section>
  );
}
