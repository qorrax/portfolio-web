import { FaIconName } from 'react-icons/fa';
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><FaPhoneAlt /> 123-456-7890</li>
              <li><FaEnvelope /> info@example.com</li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#"><FaFacebookF/></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <p className="text-center">2023 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;