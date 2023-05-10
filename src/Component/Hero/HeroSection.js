
// import React from 'react';
// // import { Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';

// const HeroSection = ({ image,  title, description }) => {
//   return (


//     <h1>Hero Section</h1>
    
//     // <Card className="hero-section">
//     //       <CardImg src={image} alt="Card image cap" />
//     //        <CardBody>
//     //         <CardTitle>{title}</CardTitle>
//     //          <CardText>{description}</CardText>
//     //       </CardBody>
//     //      </Card>
//   );
// };



// import React from 'react';
// import './HeroSection.css';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HeroStyles.css';


function HeroSection() {
  return (
    <div className="hero-section-container">
      <Card className="hero-section-card">
        <Card.Img variant="top" src="https://media.licdn.com/dms/image/D5603AQGXBX-xdnkrMg/profile-displayphoto-shrink_800_800/0/1682628733535?e=1689206400&v=beta&t=udKUB0S5E-eHcUpGKGggGW1Iv9kViVLGZ1dgrN8vbGY" />
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

