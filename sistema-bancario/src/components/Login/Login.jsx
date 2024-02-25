import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Login.css";
import logoSistema from "../../img/logo-sistema.png";
export default function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="input-title">Ingrese su contraseña</Form.Label>
              <Form.Control type="text" className="input-login" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="login-button">Ingresar</Button>
        </Form>
      </div>
    </div>
  );
}
