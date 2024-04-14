
import './BotonCard.css';

export const BotonCard = ({ nombre, clase, cambiarEstado }) => {
    
    return (
        <button
            className={clase}
            onClick={cambiarEstado}
        >
            {nombre}
        </button>
    );
};