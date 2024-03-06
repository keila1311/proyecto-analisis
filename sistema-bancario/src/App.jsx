import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBarWrapper from './components/NavBarWrapper';
import Users from "./components/Users/Users";

const App = () => {
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
    <Router>
      <div>
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/home/*"
            element={
              isLoggedIn ? (
                <NavBarWrapper onLogout={handleLogout}>
                  <Home />
                </NavBarWrapper>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/users/*"
            element={
              isLoggedIn ? (
                <NavBarWrapper onLogout={handleLogout}>
                  <Users />
                </NavBarWrapper>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
