import { useState } from "react";
import "./ProductoCard.css";
import { Boton } from "../BotonCard/BotonCard";

export const ProductoCard = ({
  id,
  image,
  title,
  handledAgregar,
  handledAumentar,
  handledDisminuir,
  handledEliminar
}) => {
  //Este será el ESTADO para saber si un producto está agregado en el Carrito
  const [agregado, setAgregado] = useState(false);

  //Cuando se de Click al Botón del Card se ejecuta esto
  const cambiarEstado = () => {
    setAgregado(!agregado);

    agregado ? handledEliminar(): handledAgregar();
  };

  return (
    <div className="contenedor-producto" key={id}>
      <img loading="lazy" className="img-producto" src={image} alt={title} />
      <h3 className="titulo-producto">{title}</h3>
      {agregado ? (
        <Boton
          nombre="Quitar del Carrito"
          clase="btn btn-danger"
          cambiarEstado={cambiarEstado}
        />
      ) : (
        <Boton
          nombre="Agregar al Carrito"
          clase="btn btn-success"
          cambiarEstado={cambiarEstado}
        />
      )}
    </div>
  );
};
