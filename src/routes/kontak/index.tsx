import { Container, Row, Col } from "react-bootstrap";
import { createFileRoute } from "@tanstack/react-router";
import bgImg from "../../assets/img/office.jpg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/kontak/")({
  component: KontakComponent,
});

function KontakComponent() {
  return (
    <div className="kontak-page">
      <div className="kontak min-vh-100">
        <Container>
          <Row>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <Col>
                <h1 className="fw-bold text-center">Kontak Kami</h1>
                <p className="text-center">
                  Bila ada pertanyaan lebih lanjut seputar produk, hubungi:
                </p>
              </Col>
            </motion.div>
          </Row>
          <Row>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Col>
                <h3 className="fw-bold text-center">Main Office</h3>
                <p className="text-center">
                  Jalan Poros No 123 Makassar, Sulawesi Selatan
                </p>
                <h3 className="fw-bold text-center">Customer Service</h3>
                <p className="text-center">+62912345678</p>
                <p className="text-center">mama-moon@gmail.com</p>
              </Col>
            </motion.div>
            <Col>
              <img src={bgImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
