import { Link } from "react-router-dom";


export const Productos = ({ productos }) => {
  return (
    <>
      <h1>Lista de Productos</h1>
      <ul>
        {
          productos && productos.map(producto => (
            <li key={producto.id}>
              <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};
