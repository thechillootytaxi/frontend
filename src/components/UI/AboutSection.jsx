import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import abtCar from "../../assets/all-images/cars-img/abtCar.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Chill Ooty Taxi Service</h2>
              <p className="section__description">
              We prioritize the safety of our passengers more than anything and we ensure
              it with our well-maintained cars and professionally trained drivers. With our customer
              centric approach we offer a hassle-free, affordable and reliable taxi service for your
              nearby and outstation locations. We offers our customers to choose from a wide range of
              cabs at cost-effective price based on customer's budget. We leave no stone unturned to make
              our customers feel comfortable and secure throughout their journey.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> <b>15000+ Happy Customers</b>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> <b>1000000+ KMs</b>
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> <b>50+ Experienced Drivers</b>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> <b>100+ Vehicles</b>
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={abtCar} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
