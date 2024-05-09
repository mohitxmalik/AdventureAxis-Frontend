import React from "react";
import "../styles/home.css";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience2.png";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* // Hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" autoPlay muted loop />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box ">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Get Ready to Explore"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Every journey unlocks the door to cherished
                  <span className="highlight"> Memories </span>
                </h1>
                <p>
                  AdventureAxis, an online travel booking website that allows to
                  search and book travel related services like hotels and best
                  possible ways to reach out that particular country.Being
                  India's leading website for hotel and holiday bookings,
                  AdventureAxis helps you book hotels that are affordable and
                  customized to your trips
                  <br></br>
                </p>
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/*  featured tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*  featured tour section end */}

      {/*  experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Drawing from our extensive experience, we are committed to
                  <br />
                  providing exceptional service tailored just for you.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>170+</span>
                  <h6>Successfull trip</h6>
                </div>
                <div className="counter__box">
                  <span>200+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>2</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*  experience section end */}

      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end */}

      {/* testimonial section start */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* testimonial section end */}
      <Newsletter />
    </>
  );
};

export default Home;

