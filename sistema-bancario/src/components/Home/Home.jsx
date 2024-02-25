import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import BankModal from "../BankModal/BankModal";
import "./Home.css";
import logoBI from "../../img/bi-logo.png";
import logoBam from "../../img/bam-logo-v2.png";
import logoBanrural from "../../img/banrural-logo.jpeg";
import LastTransactions from "../LastTransactions";

export default function Home() {
  const cards = [
    { id: 1, title: "Banco Industrial", content: "This is Card 1", image: logoBI },
    { id: 2, title: "BAM", content: "This is Card 2", image: logoBam },
    { id: 3, title: "Banrural", content: "This is Card 3", image: logoBanrural},
    // Agrega más tarjetas aquí
  ];
  const values = [true];
  const [show, setShow] = useState(false);

  const cardStyle = {
    height: '200px', // Establece la altura que desees
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  return (
    <div className="home-container">
      <Row>
        {cards.map((card) => (
          <Col sm={4} key={card.id}>
            <Card style={{ ...cardStyle, backgroundImage: `url('${card.image}')` }}>
              <Card.Body>
                <Card.Text>
                  {values.map((v, idx) => (
                    <Button
                      style={buttonStyle}
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => setShow(true)}
                    >
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <BankModal show={show} handleClose={() => setShow(false)} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <LastTransactions />
    </div>
  );
}
