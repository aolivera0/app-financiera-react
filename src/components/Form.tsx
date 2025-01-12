export function Form({
    monto,
    setMonto,
    tiempo,
    setTiempo,
    selectedPeriodicidad,
    setSelectedPeriodicidad,
    tasaInteres,
    setTasaInteres,
    selectedTipoInteres,
    setSelectedTipoInteres,
}: {
    monto: number;
    setMonto: Function;
    tiempo: number;
    setTiempo: Function;
    selectedPeriodicidad: string;
    setSelectedPeriodicidad: Function;
    tasaInteres: number;
    setTasaInteres: Function;
    selectedTipoInteres: string;
    setSelectedTipoInteres: Function;
}) {
    return (
        <form>
            <div>
                <label htmlFor="monto">Monto</label>
                <input
                    type="number"
                    id="monto"
                    value={monto}
                    onChange={(e) => setMonto(parseInt(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor="tiempo">Tiempo</label>
                <input
                    type="number"
                    id="tiempo"
                    value={tiempo}
                    onChange={(e) => setTiempo(parseInt(e.target.value))}
                />
                <select
                    value={selectedPeriodicidad}
                    onChange={(e) => setSelectedPeriodicidad(e.target.value)}
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
                    onChange={(e) => setTasaInteres(parseFloat(e.target.value))}
                />
                <select
                    name=""
                    id="tipo-interes"
                    value={selectedTipoInteres}
                    onChange={(e) => setSelectedTipoInteres(e.target.value)}
                >
                    <option value="EA">E.A</option>
                    <option value="mensual">M.V</option>
                    <option value="diaria">Diaria</option>
                </select>
            </div>
        </form>
    );
}
