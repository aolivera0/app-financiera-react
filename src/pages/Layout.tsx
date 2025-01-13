import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar">
          <Link to="/">
            <span className="logo">App Financiera</span>
          </Link>
          <ul className="navbar--list">
            <li>
              <Link to="/tasas">Tasas de interés</Link>
            </li>
            <li>
              <Link to="/credito">Crédito</Link>
            </li>
            <li>
              <Link to="/salario">Salario</Link>
            </li>
            <li>
              <Link to="/liquidacion">Liquidación</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
