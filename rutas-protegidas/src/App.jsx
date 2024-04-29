import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Admin,
  Analytics,
  Dashboard,
  HomeUser,
  Landing,
} from "../pages/Paginas";
import { Navbar } from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

function App() {
  const authValue = useContext(AuthContext);
  const { user, login, logout } = authValue;

  return (
    <>
      <Navbar />
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute redirectTo="/" isAllowed={!!user} />}>
          {/* Estos 2 Route tienen el Mismo Nivel de Autorización */}
          <Route path="/home" element={<HomeUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
