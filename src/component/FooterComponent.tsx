import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@tanstack/react-router";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Mama Moon</h3>
            <p className="desc">For More Information:</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+6285312345678</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">Mama-moon@gmail.com</p>
              </Link>
            </div>
            <h5 className="address-title fw-bold mt-5">Main Office</h5>
            <div className="address mt-2 mb-1">
              <Link className="text-decoration-none">
                <i className="fa-solid fa-location-dot"></i>
                <p className="m-0">
                  Jl. Poros No 123, Makassar, Sulawesi Selatan, Indonesia
                </p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="/about">Tentang Kami</Link>
            <Link to="/produk">Produk</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/kontak">Kontak Kami</Link>
            <Link to="/faq">FAQ</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold">Social Media</h5>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} PT Mama Moon, All
              Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
