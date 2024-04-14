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
                  <td>{1}</td>
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
