// import logo from "./logo.svg";
import "./App.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container fluid="sm">
        <Form>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPembeli"
          >
            <Form.Label column sm={2}>
              Nama Pembeli
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Pembeli" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalJudul">
            <Form.Label column sm={2}>
              Judul Ebook
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Judul Ebook" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalJumlah">
            <Form.Label column sm={2}>
              Jumlah Beli
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="number" min="1"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={10}>
              <Button type="submit" style={{ width: 1000 }}>
                Proses
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default App;
