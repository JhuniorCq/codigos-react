import { useContext, useState } from "react";
import "./ProductoCard.css";
import { BotonCard } from "../BotonCard/BotonCard";
// import { ProductoCarddd } from './ProductoCard.js';

export const ProductoCard = ({
  id,
  image,
  title,
  agregarCompra,
  eliminarCompra
}) => {
  
  // Este será el ESTADO para saber si un producto está agregado en el Carrito
  const [agregado, setAgregado] = useState(false);

  //Cuando se de Click al Botón del Card se ejecuta esto
  const cambiarEstado = () => {
    setAgregado(!agregado);

    agregado ? eliminarCompra(): agregarCompra();
  };

  return (
    <div className="contenedor-producto" key={id}>
      <img loading="lazy" className="img-producto" src={image} alt={title} />
      <h3 className="titulo-producto">{title}</h3>
      {agregado ? (
        <BotonCard
          nombre="Quitar del Carrito"
          clase="btn btn-danger"
          cambiarEstado={cambiarEstado}
        />
      ) : (
        <BotonCard
          nombre="Agregar al Carrito"
          clase="btn btn-success"
          cambiarEstado={cambiarEstado}
        />
      )}
    </div>
  );
};
