import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { businessDetails } from "../../assets/data/businessDetails";
import { useNavigate } from "react-router-dom";

const quickLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },

  // {
  //   path: "#",
  //   display: "Privacy Policy",
  // },

  {
    path: "/cars",
    display: "Car Listing",
  },
  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    console.log(window.location.pathname)
    if(window.location.pathname===link){
      window.scrollTo(0, 0);
      return
    }
    navigate(link)
  }
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    {businessDetails.name}
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              {businessDetails.description}
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <div onClick={()=>handleNavigate(item.path)}>
                      {item.display}
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">{businessDetails.address}</p>
              {businessDetails.phone.map((item,ind)=>(<p className="office__info" key={ind}>Phone{ind+1}: {item}</p>))}
              <p className="office__info">Email: {businessDetails.email}</p>

              <p className="office__info">Office Time: {businessDetails.timings}</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed with Love by <a href='https://jamy.vercel.app/' target="_blank" rel="noreferrer">Jamy</a>. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
