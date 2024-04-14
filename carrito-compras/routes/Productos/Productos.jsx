import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Productos.css";
import { ProductoCard } from "../../components/ProductoCard/ProductoCard";
import { useGet } from "../../hooks/useGet";
import { ProductosContext } from "../../context/ProductosContext";
import { CarritoContext } from "../../context/CarritoContext";

export const Productos = () => {
  // const [productos] = useGet('https://fakestoreapi.com/products');
  const { productos, loading } = useContext(ProductosContext);

  const {
    listaCompras,
    agregarCompra,
    eliminarCompra,
  } = useContext(CarritoContext);

  //Creo que NO es necesario CREAR a handledAgregar, de frente usemos a agregarCompra
  const handledAgregar = (compra) => {
    agregarCompra(compra);
  };

  //Creo que NO es necesario CREAR a handledEliminar, de frente usemos a eliminarCompra
  const handledEliminar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1>PRODUCTOS</h1>
      <div className="contenedor-productos">
        {
          loading ? 
          <p>Cargando ...</p>: (
            productos.map((producto) => (
              <ProductoCard
                key={producto.id}
                image={producto.image}
                title={producto.title}
                agregarCompra={() => agregarCompra(producto)}
                eliminarCompra={() => eliminarCompra(producto.id)}
              />
            ))
          )
        }
      </div>
    </>
  );
};
