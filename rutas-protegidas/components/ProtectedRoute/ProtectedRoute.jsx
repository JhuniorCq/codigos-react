
import { Navigate, Outlet } from "react-router-dom";

// Por defecto siempre REDIRECCIONARÁ a "/landing", es decir cuando NO pasen un valor a la prop "redirectTo" pasará esto
export const ProtectedRoute = ({ isAllowed, children, redirectTo = "/landing" }) => {

  if (!isAllowed) {
    /*
      Acá por defecto hacemos que se REDIRIJA al "/landing" cuando el Usuario no esté autentificado
      Pero, mejor sería crear una prop que guarde la RUTA a donde queremos que nos REDIRIJA, así 
      la REDIRECCIÓN sería Personalizada
    */
    return <Navigate to={redirectTo} />;
  }

  return children ? children: <Outlet />
};
