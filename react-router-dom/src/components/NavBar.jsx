import { Link, NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className={({isActive}) => isActive ? 'nav-link activo': 'nav-link'}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/principal' className={({isActive}) => isActive ? 'nav-link activo': 'nav-link'}>
                Principal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className={({isActive}) => isActive ? 'nav-link activo': 'nav-link'}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className={({isActive}) => isActive ? 'nav-link activo': 'nav-link'}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/productos' className={({isActive}) => isActive ? 'nav-link activo': 'nav-link'}>
                Productos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
