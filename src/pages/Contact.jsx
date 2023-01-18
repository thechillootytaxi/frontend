import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from 'react-toastify';
import { businessDetails } from "../assets/data/businessDetails";
import axios from "axios";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  // {
  //   url: "#",
  //   icon: "ri-linkedin-line",
  // },
  {
    url: "#",
    icon: "ri-youtube-line",
  },
];

const Contact = () => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async(data) => {
    setIsloading(true)
    try {
      await axios.post('https://backend-thechillootytaxi-gmailcom.vercel.app/api/sendEmail', data)
      reset();
      setIsloading(false)
      toast.success('Message has been sent successfully');
    } catch (error) {
      console.log(error)
      setIsloading(false)
      toast.error('Server issue, Please Try Later')
    }
  }
  const onError = data => console.log(data);
  const [showHeader, setShowHeader] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  useEffect(() => {
    if(window.location.pathname==="/home")
    setShowHeader(false)
    else
    setShowHeader(true)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const setDimension = () => {
    if(window.innerWidth< 768)
    setIsMobileScreen(true)
    else
    setIsMobileScreen(false)
  }
  
  useEffect(() => {
    if(window.innerWidth< 768){
      setIsMobileScreen(true)
    }
    window.addEventListener('resize', setDimension);
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [])


  return (
    <Helmet title="Contact">
      {showHeader && <CommonSection title="Contact" />}
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <FormGroup className="contact__form">
                  <Controller
                    control={control}
                    name="name"
                    rules={{ required: true }}
                    render={({ field: { onChange }}) => (
                      <Input placeholder="Your Name" type="text" onChange={onChange}/>
                    )}
                  />               
                  {errors.name && <span className="error-text">This field is required</span>}
                </FormGroup>

                <FormGroup className="contact__form">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                      <Input placeholder="Email" type="email" onChange={onChange}/>
                    )}
                  />
                </FormGroup>

                <FormGroup className="contact__form">
                  <Controller
                    control={control}
                    name="phone"
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Input placeholder="Phone Number" type="number" onChange={onChange}/>
                    )}
                  />
                  {errors.phone && <span className="error-text">This field is required</span>}
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    {...register("messege", { required: false})}
                  ></textarea>
                </FormGroup>
                <button className="btn find__car-btn" style={{width:'auto'}} type="submit" disabled={isLoading}>
                  Send Message
                </button> 
                {isLoading && <h5>Sending...</h5>}
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className={`fw-bold ${isMobileScreen && 'mt-4'}`}>Contact Information</h6>
                <p className="section__description mb-0">
                  {businessDetails.address}
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">{`${businessDetails.phone[0]}, ${businessDetails.phone[1]}`}</p>
                  
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">{businessDetails.email}</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
