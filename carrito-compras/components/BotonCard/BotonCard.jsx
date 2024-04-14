
import './BotonCard.css';

export const Boton = ({ nombre, clase, cambiarEstado }) => {
    
    return (
        <button
            className={clase}
            onClick={cambiarEstado}
        >
            {nombre}
        </button>
    );
};