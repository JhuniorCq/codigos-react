

import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Esta función simulará la Función que hace el POST al back con los datos de Login
  const login = () => {
    // Envío de datos al back para la Autenticación -> El back me envía una Respuesta

    // Actualizamos el ESTADO "user" con la Respuesta enviada desde el back
    setUser({
      id: 1,
      name: "Jhon",
      permissions: ["analize"],
      roles: ["admin"]
    });
  };

  // Esta función será para cuando se CIERRE LA SESIÓN -> Volveremos el estado "user" a null
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};


