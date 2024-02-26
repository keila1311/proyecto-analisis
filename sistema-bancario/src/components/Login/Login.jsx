import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Login.css";
import logoSistema from "../../img/sistema-logo-horizontal.png";

export default function Login({ onLogin }) {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleLogin = () => {
    if (username && password) {
      // Guardar en sessionStorage
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);
      // Llamar a la función de inicio de sesión
      onLogin();
    } else {
      alert("Por favor, complete ambos campos.");
    }
  };
  return (
    <div className="body-background">
      <div className="container container-login-form">
        <div className="logo-container">
          <img src={logoSistema} alt="Logotipo" className="logotipo" />
        </div>
        <h2 className="login-title">Iniciar Sesión</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="login-form">
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label className="input-title">Ingrese su usuario</Form.Label>
              <Form.Control
                required
                type="text"
                className="input-login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su usuario.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="input-title">Ingrese su contraseña</Form.Label>
              <Form.Control type="password" className="input-login" value={password}
        onChange={(e) => setPassword(e.target.value)} required />
              <Form.Control.Feedback type="invalid">
                Ingrese su contraseña.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="login-button" onClick={handleLogin}>Ingresar</Button>
        </Form>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
