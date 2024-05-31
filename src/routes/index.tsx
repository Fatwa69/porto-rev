import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Container, Row, Col } from "react-bootstrap";
import bgVid from "../assets/img/background-video.mp4";
import "../main.css";
import { produkTerbaru, dataSwiper } from "../data/dataArray";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  let navigate = useNavigate();
  return(
  <div className="homepage">
    <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1 className="mb-4">
              Temukan <br />
              <span>Kecantikan Alami</span> <br />
              Dari Produk Kami.
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              sequi harum neque vel dolorem tempore ipsa, natus eaque magni
              rerum, quibusdam laudantium exercitationem consequuntur fugit
              inventore esse vero quis! Exercitationem.
            </p>
            <button
              className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2"
              onClick={() => navigate({ to: "/produk" })}
            >
              Lihat Produk
            </button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
            <video autoPlay loop muted>
              <source src={bgVid} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
    </header>
    <div className="produk w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Produk Terbaru</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eligendi dolore explicabo quod laborum, omnis minima aut nemo est
              veritatis corporis distinctio, voluptate labore perspiciatis
              officia deserunt ipsum! Tenetur, adipisci?
            </p>
          </Col>
        </Row>
        <Row>
          {produkTerbaru.map((produk) => {
            return (
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
            );
          })}
        </Row>
        <Row>
          <Col className="text-center">
            <button
              className="btn btn-success rounded-5"
              onClick={() => navigate({ to: "/produk" })}
            >
              Lihat Semua Produk
              <i className="fa-solid fa-chevron-right ms-3"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="testimonial py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold my-5">Testimonial</h1>
          </Col>
        </Row>
        <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dataSwiper.map((data) => {
              return (
                <SwiperSlide key={data.id} className="shadow-sm">
                  <p className="desc">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </div>
  </div>
  )
}