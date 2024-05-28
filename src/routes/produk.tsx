import { Container, Row, Col } from "react-bootstrap";
import { createFileRoute } from "@tanstack/react-router";
import { semuaProduk } from "../data/dataArray";
import { motion } from "framer-motion";

export const Route = createFileRoute("/produk")({
  component: () => (
    <div className="produk-page">
      <div className="produk min-vh-100">
        <Container>
          <Row>
            <Col>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              >
                <h1 className="fw-bold text-center">Semua Produk</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  deserunt mollitia, maxime expedita voluptatum eligendi dolore
                  corrupti! Doloremque, tempore fugiat illum repellat qui
                  provident, quos possimus eius excepturi eveniet tempora!
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row>
            {semuaProduk.map((produk) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                >
                  <Col key={produk.id} className="shadow rounded">
                    <img
                      src={produk.image}
                      alt="unsplash.com"
                      className="w-100 mb-5 rounded-top"
                    />
                    <div className="star mb-2 px-3">
                      <i className={produk.star1}></i>
                      <i className={produk.star2}></i>
                      <i className={produk.star3}></i>
                      <i className={produk.star4}></i>
                      <i className={produk.star5}></i>
                    </div>
                    <h5 className="mb-5 px-3">{produk.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 fw-bold">{produk.price}</p>
                      <button
                        className="btn btn-danger rounded-1"
                        onClick={() => window.open(produk.linkproduk, "_blank")}
                      >
                        {produk.buy}
                      </button>
                    </div>
                  </Col>
                </motion.div>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  ),
});
