

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HeroStyles.css';


function HeroSection() {
  return (
    <div className="hero-section-container">
      <Card className="hero-section-card">
        {/* <Card.Img variant="top" src="holder.js/100px180" />
          
          <div className="hero-section-image" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       <Card className="hero-section-card">
        <Card.Img variant="top" src="holder.js/100px180" />
          
          <div className="hero-section-image" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HeroSection;

