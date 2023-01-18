import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
// import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
// import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";
import { useEffect } from "react";
import { businessDetails } from "../assets/data/businessDetails";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                The Chill Ooty Taxi is a taxi service enabling the travelers to book safe, 
                reliable and comfortable ride. To serve you better, we give 
                you a wide range of choices between taxis across TamilNadu.
                We are regularly upgrading our services to offer you comfortable travel
                with great value for money.
                </p>

                <p className="section__description">
                Whether you have to rush for an urgent meeting
                or a flight to catch, arrange a pickup for your family returning from a late
                night party, you can always count on us to get you there safely and on time.
                We strive to be your most trusted travel partner for always.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  {/* <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span> */}

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>{`${businessDetails.phone[0]}, ${businessDetails.phone[1]}`}</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <BecomeDriverSection /> */}

      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default About;
