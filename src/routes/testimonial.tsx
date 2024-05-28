import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/dataArray";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/testimonial")({
  component: () => (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              <Col>
                <h1 className="fw-bold text-center">Apa Kata Mereka?</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis perspiciatis optio molestiae est cumque ut natus
                  fugit quaerat perferendis magnam voluptatibus, praesentium,
                  fuga quia! Dolores, optio. Aspernatur voluptate quos
                  accusantium.
                </p>
              </Col>
            </motion.div>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                >
                  <Col key={data.id} className="mb-5">
                    <p className="desc shadow-sm">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
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
