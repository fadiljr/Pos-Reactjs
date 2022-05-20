import React, { useState, useEffect } from "react";
import "./PosComponent.css";
import { Form, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { setForm } from "../redux";

const PosComponent = () => {
  // const PosReducer = useSelector((state) => state);
  // const dispatch = useDispatch();
  const [totaltemp, setTotalTemp] = useState(null);
  const [total, setTotal] = useState(null);
  const [kembali, setKembali] = useState(null);
  const [bonus, setBonus] = useState(null);
  const [kurang, setKurang] = useState(null);
  const [keterangan, setKeterangan] = useState(null);
  const [pembeli, setPembeli] = useState();
  const [judul, setJudul] = useState();
  const [jumlah, setJumlah] = useState();
  const [harga, setHarga] = useState();
  const [bayar, setBayar] = useState();
  const [keteranganKembalian, setKeteranganKembalian] = useState();
  const [isDone, setIsDone] = useState(false);
  let tempTotal = null;
  let tempPengurangan;
  useEffect(() => {
    setTotal(null);
    setKurang(null);
    setKeteranganKembalian(null);
    setBonus(null);
    setKeterangan(null);
    setKembali(null);
    tempTotal = jumlah * harga;
    tempPengurangan = bayar - tempTotal;
    setTotal(tempTotal);
    if (tempPengurangan < 0) {
      setKurang(tempPengurangan * -1);
      setKeteranganKembalian("0 (Tidak ada kembali)");
    } else {
      setKembali(tempPengurangan);
      setKeteranganKembalian(tempPengurangan);
    }

    if (tempTotal > 500000) {
      setBonus("Keyboard");
    } else if (tempTotal >= 300000 && tempTotal <= 500000) {
      setBonus("Mouse");
    } else if (tempTotal >= 200000 && tempTotal <= 300000) {
      setBonus("Flashdisk");
    } else {
      setBonus("Tidak dapat bonus");
    }
    console.log(tempTotal);
    if (kurang) {
      setKeterangan("Kurang bayar Rp. " + kurang);
    }
    if (kembali) {
      setKeterangan("Tunggu kembalian");
    }

    setIsDone(false);
    // settoggle(true);
  }, [isDone === true]);
  // console.log('PosReducer', PosReducer);
  // const sendData = () => {
  //   console.log("data yang dikirim: ", PosReducer.form);
  //   setTotal(totaltemp);
  //   if (totaltemp > PosReducer.form.bayar) {
  //     setKembali("Tidak ada kembali");
  //   } else if (totaltemp < PosReducer.form.bayar) {
  //     setKembali(PosReducer.form.bayar - totaltemp);
  //   }
  //   if (totaltemp > 500000) {
  //     setBonus("Keyboard");
  //   } else if (totaltemp >= 300000 && totaltemp <= 500000) {
  //     setBonus("Mouse");
  //   } else if (totaltemp >= 200000 && totaltemp <= 300000) {
  //     setBonus("Flashdisk");
  //   } else {
  //     setBonus("Tidak dapat bonus");
  //   }
  //   if (totaltemp > PosReducer.form.bayar) {
  //     setKeterangan("Kurang bayar Rp. " + kurang);
  //   } else if (totaltemp < PosReducer.form.bayar) {
  //     setKeterangan("Tunggu kembalian");
  //   }
  //   console.log("data masuk", totaltemp, kembali, bonus, keterangan);
  // };
  // const onInputChange = (value, inputType) => {
  //   dispatch(setForm(inputType, value));
  // };

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
              onChange={(e) => setPembeli(e.target.value)}
              value={pembeli}
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
              onChange={(e) => setJudul(e.target.value)}
              value={judul}
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
              onChange={(e) => setJumlah(e.target.value)}
              value={jumlah}
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
              onChange={(e) => setHarga(e.target.value)}
              value={harga}
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
              onChange={(e) => setBayar(e.target.value)}
              value={bayar}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={10}>
            <button
              class="btn btn-primary"
              style={{ width: 1000 }}
              onClick={() => setIsDone(true)}
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
            <p>{total? `${total}` : null}</p>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalKembali">
          <Form.Label column sm={2}>
            Uang Kembali : Rp.
          </Form.Label>
          <Col sm={1}>
            <p>{keteranganKembalian ? `${keteranganKembalian}` : null}</p>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBonus">
          <Form.Label column sm={2}>
            Bonus :
          </Form.Label>
          <Col sm={1}>
            <p>{total ? `${bonus}` : null}</p>
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
            <p>{keterangan ? `${keterangan}` : null}</p>
          </Col>
        </Form.Group>
      </Container>
    </div>
  );
};

export default PosComponent;
