import React, { useState, useEffect } from "react";
import "./PosComponent.css";
import { Form, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { setForm } from "../redux";

const PosComponent = () => {
  const PosReducer = useSelector((state) => state.PosReducer);
  const dispatch = useDispatch();
  const [totaltemp, setTotalTemp] = useState(null);
  const [total, setTotal] = useState(null);
  const [kembali, setKembali] = useState(null);
  const [bonus, setBonus] = useState(null);
  const [kurang, setKurang] = useState(null);
  const [keterangan, setKeterangan] = useState(null);

  useEffect(() => {
    console.log("PosReducer: ", PosReducer);
    setTotalTemp(PosReducer.form.harga * PosReducer.form.jumlah);
    setKurang(totaltemp - PosReducer.form.bayar);
  });
  
  const sendData = () => {
    setTotal(totaltemp);
    if (totaltemp > PosReducer.form.bayar) {
      setKembali("Tidak ada kembali");
    } else if (totaltemp < PosReducer.form.bayar) {
      setKembali(PosReducer.form.bayar - totaltemp);
    }
    if (totaltemp > 500000) {
      setBonus("Keyboard");
    } else if (totaltemp >= 300000 && totaltemp <= 500000) {
      setBonus("Mouse");
    } else if (totaltemp >= 200000 && totaltemp <= 300000) {
      setBonus("Flashdisk");
    } else {
      setBonus("Tidak dapat bonus");
    }
    if (totaltemp > PosReducer.form.bayar) {
      setKeterangan("Kurang bayar Rp. " + kurang);
    } else if (totaltemp < PosReducer.form.bayar) {
      setKeterangan("Tunggu kembalian");
    }
  };
  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };
  const reset = () => {
    onInputChange("", "pembeli");
    onInputChange("", "judul");
    onInputChange("", "jumlah");
    onInputChange("", "harga");
    onInputChange("", "bayar");
    setTotal(null);
    setTotalTemp(null);
    setKembali(null);
    setKurang(null);
    setBonus(null);
    setKeterangan(null);
  };
  return (
    <div className="Pos">
      <Container fluid="sm">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPembeli">
          <Form.Label column sm={2}>
            Nama Pembeli
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              placeholder="Pembeli"
              onChange={(e) => onInputChange(e.target.value, "pembeli")}
              value={PosReducer.form.pembeli}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalJudul">
          <Form.Label column sm={2}>
            Judul Ebook
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              placeholder="Judul Ebook"
              onChange={(e) => onInputChange(e.target.value, "judul")}
              value={PosReducer.form.judul}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalJumlah">
          <Form.Label column sm={2}>
            Jumlah Beli
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              type="number"
              min="1"
              onChange={(e) => onInputChange(e.target.value, "jumlah")}
              value={PosReducer.form.jumlah}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalHarga">
          <Form.Label column sm={2}>
            Harga Rp.
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              type="number"
              min="1"
              onChange={(e) => onInputChange(e.target.value, "harga")}
              value={PosReducer.form.harga}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalHarga">
          <Form.Label column sm={2}>
            Uang Bayar Rp.
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              type="number"
              min="1"
              onChange={(e) => onInputChange(e.target.value, "bayar")}
              value={PosReducer.form.bayar}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={10}>
            <button
              class="btn btn-primary"
              style={{ width: 1030 }}
              onClick={() => {
                sendData();
              }}
            >
              Proses
            </button>
          </Col>
        </Form.Group>
      </Container>

      <Container fluid="sm">
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalTotalBelanja"
        >
          <Form.Label column sm={2}>
            Total Belanja :
          </Form.Label>
          <Col sm={1}>
            <p>{total}</p>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalKembali">
          <Form.Label column sm={2}>
            Uang Kembali : Rp.
          </Form.Label>
          <Col sm={1}>
            <p>{kembali}</p>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBonus">
          <Form.Label column sm={2}>
            Bonus :
          </Form.Label>
          <Col sm={1}>
            <p>{bonus}</p>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalKeterangan"
        >
          <Form.Label column sm={2}>
            Keterangan :
          </Form.Label>
          <Col sm={1}>
            <p>{keterangan}</p>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalButton">
          <Col sm={5}>
            <button
              class="btn btn-primary"
              style={{ width: 490 }}
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </Col>
          <Col sm={1}>
            <button
              class="btn btn-danger"
              style={{ width: 490 }}
              onClick={() => {
                window.close();
              }}
            >
              Keluar
            </button>
          </Col>
        </Form.Group>
      </Container>
    </div>
  );
};

export default PosComponent;
