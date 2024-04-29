import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Start
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/landing"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Landing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
