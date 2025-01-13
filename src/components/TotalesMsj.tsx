export function TotalesMsj({ children }: { children: string }) {
    return (
      <section className="wrapper">
        <div className="totales-mensaje">
          <h3>Análisis</h3>
          <p>{children}</p>
        </div>
      </section>
    );
  }
  