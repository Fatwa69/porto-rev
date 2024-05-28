import { Container, Row, Col } from "react-bootstrap";
import { createLazyFileRoute } from "@tanstack/react-router";
import AboutImg from "../assets/img/about/about-1.jpg";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="about-page">
      <div className="about min-vh-100">
        <Container>
          <Row>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <Col>
                <h1 className="fw-bold text-center">Tentang Skincare React</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, delectus dolorum. Consectetur assumenda iusto
                  quaerat, fugit et sit tempore repellendus obcaecati nemo.
                  Beatae vitae at repudiandae. Fugiat ut eaque magni.
                </p>
              </Col>
            </motion.div>
          </Row>
          <Row>
            <Col>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  debitis non numquam, enim incidunt impedit animi ullam,
                  cupiditate facere sit laborum officiis ipsam repellat
                  excepturi consequuntur aut, perferendis exercitationem
                  dignissimos?
                </p>
              </motion.div>
            </Col>
            <Col>
              <img src={AboutImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
