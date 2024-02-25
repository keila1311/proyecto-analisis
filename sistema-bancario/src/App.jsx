import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './components/Login'
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Verificar la sesión al cargar la aplicación
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    if (storedUsername && storedPassword) {
      // Credenciales encontradas, establecer el estado de inicio de sesión
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Limpiar credenciales en sessionStorage al cerrar sesión
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    // Cambiar el estado de inicio de sesión
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <NavBar onLogout={handleLogout} />
          <Home />
        </>
        
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
