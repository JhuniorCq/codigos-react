import { useGet } from "../hooks/useGet";
import { ProductosContext } from "./ProductosContext";

export const ProductosProvider = ({ children }) => {

    const stateProductos = useGet('https://fakestoreapi.com/products');

    // Con este CONTEXTO varios Componentes podrán ACCEDER a la LISTA DE PRODUCTOS
    return (
        <ProductosContext.Provider value={stateProductos}>
            {children}
        </ProductosContext.Provider>
    );
};