import { useContext } from "react";
import "./Carrito.css";
import { CarritoContext } from "../../context/CarritoContext";

export const Carrito = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handledPrint = () => {
    print();
  };

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => (total + item.price*item.cantidad), 0).toFixed(2);
  };

  return (
    <>
      <h1>Carrito de Compras</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCompras &&
              listaCompras.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-outline-primary" onClick={() => disminuirCantidad(item.id)}>-</button>
                    <button className="btn btn-primary">{item.cantidad}</button>
                    <button className="btn btn-outline-primary" onClick={() => aumentarCantidad(item.id)}>+</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarCompra(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            }
            <tr>
              <td><strong>TOTAL</strong></td>
              <td></td>
              <td></td>
              <td>${calcularTotal()}</td>
            </tr>
        </tbody>
      </table>
      <div>
        <button 
          className="btn btn-primary" 
          onClick={handledPrint} 
          disabled={listaCompras.length < 1}
        >
          COMPRAR
        </button>
      </div>
    </>
  );
};
/*
  Ahora tenemos que usar el useContext para que los PRODUCTOS estén disponibles para todos.
  Y también usaremos el useReducer para realizar ACCIONES con esos PRODUCTOS.

  También crearemos un CONTEXTO para el CARRITO
*/
