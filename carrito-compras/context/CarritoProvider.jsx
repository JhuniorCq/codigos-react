import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const estadoInicial = [];

//Esta es la Función Reductora
const comprasReducer = (state, action) => {
  switch (action.type) {
    case "[CARRITO] Agregar Compra":
      return [...state, action.payload];
    case "[CARRITO] Aumentar Cantidad Compra":
      // Cuando se quiera AUMENTAR la Cantidad de un Producto Seleccionado, vamos a Modificar el Valor de la Propiedad "cantidad" del Producto Seleccionado
      return state.map(item => {
        const cantidad = item.cantidad + 1;
        // En el IF retornamos a un Objeto con las mismas Propiedades del Objeto presente en la respectiva Iteración, y agregamos la Propiedad "cantidad" que tiene como valor a la Variable "cantidad" -> Como esta ya EXISTE se SOBREESCRIBIRÁ su Nuevo Valor sobre el que ya hay
        if (item.id === action.payload) return {...item, cantidad};
        return item;
      });
    case "[CARRITO] Disminuir Cantidad Compra":
      return state.map(item => {
        const cantidad = item.cantidad - 1;
        if (item.id === action.payload && item.cantidad > 1) return {...item, cantidad};
        return item;
      });
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
    // Cuando se presione el Botón "Agregar al Carrito" de un Producto, se Agregará la Propiedad "cantidad" al Objeto que representa al Objeto seleccionado
    compra.cantidad = 1;

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
