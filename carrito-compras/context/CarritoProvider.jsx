import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const estadoInicial = [];

//Esta es la Función Reductora
const comprasReducer = (state, action) => {
  switch (action.type) {
    case "[CARRITO] Agregar Compra":
      return [...state, action.payload];
    case "[CARRITO] Aumentar Cantidad Compra": //TODO: Agregar cantidad y modificar
      break;
    case "[CARRITO] Disminuir Cantidad Compra": //TODO: Agregar cantidad y modificar
      break;
    case "[CARRITO] Eliminar Compra":
      return state.filter((compra) => compra.id !== action.payload);
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  // Este "state" es el ESTADO ACTUAL y el "dispatch" es la FUNCIÓN DESPACHADORA
  const [listaCompras, dispatch] = useReducer(comprasReducer, estadoInicial);

  const agregarCompra = (compra) => {
    const action = {
      type: "[CARRITO] Agregar Compra",
      payload: compra,
    };

    dispatch(action);
  };

  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad Compra",
      payload: id,
    };

    dispatch(action);
  };

  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad Compra",
      payload: id,
    };

    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: id,
    };

    dispatch(action);
  };

  // Este CONTEXTO será para ALOJAR todas las cosas que vamos AGREGANDO al CARRITO
  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
