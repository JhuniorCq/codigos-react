import { NavLink } from "react-router-dom";
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import './NavBar.css';
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const NavBar = () => {

  const { listaCompras } = useContext(CarritoContext);

  return (
    <nav className="nav-bar">
      <ul>
        <div className="left-items">
          <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'activo': ''}>Inicio</NavLink></li>
          <li><NavLink to={'/principal'} className={({ isActive }) => isActive ? 'activo': ''}>Principal</NavLink></li>
          <li><NavLink to={'/productos'} className={({ isActive }) => isActive ? 'activo': ''}>Productos</NavLink></li>
        </div>
        <div className="right-items">
          <li className="btn-carrito">
            <NavLink to={'/carrito'} className={({ isActive }) => isActive ? 'activo': ''}>
              <Badge badgeContent={ listaCompras.length } color="primary">
                <ShoppingCart />
              </Badge>
            </NavLink>
          </li>

        </div>
      </ul>
    </nav>
  );
};
