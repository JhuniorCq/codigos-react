import { NavLink, Outlet } from "react-router-dom";

export const Principal = () => {
  return (
    <>
      <div>Principal</div>
      <nav>
        <ul>
          <li className="nav-item">
            <NavLink to="/principal">
              Enlace a Home de Ruta Principal
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/principal/secundario">
              Enlace a Ruta Secundario
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/principal/terciario">Enlace a Ruta Terciario</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
