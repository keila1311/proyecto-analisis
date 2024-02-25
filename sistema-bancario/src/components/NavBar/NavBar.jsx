import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoSistema from "../../img/sistema-logo-horizontal.png";
import "./NavBar.css";

export default function NavBar({ onLogout }) {

    const handleLogout = () => {
        // Limpiar credenciales en sessionStorage al cerrar sesión
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
        // Llamar a la función de cierre de sesión
        onLogout();
      };

  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary navbar-sistema"
      >
        <Navbar.Brand href="#home">
          <img
            src={logoSistema}
            className="d-inline-block align-top navbar-logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#create-user">
                Crear Usuario
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Cerrar Sessión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

NavBar.propTypes = {
    onLogout: PropTypes.func.isRequired,
  };
  