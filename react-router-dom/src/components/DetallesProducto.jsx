


import { useParams, useNavigate } from "react-router-dom";

export const DetalllesProducto = ({ productos }) => {

  const regresarAtras = () => {
    navigate(-1);
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const { nombre, precio } = productos.find((producto) => producto.id.toString() === id);

  return (
    <>
      <h1>Detalle del Producto</h1>
      <div>Nombre del Producto: {nombre}</div>
      <div>Precio del Producto: {precio}</div>
      <button className="btn btn-primary" onClick={regresarAtras}>
        Regresar
      </button>
    </>
  );
};
