import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const icons= () => {
  const softwareList = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'React.js', icon: faReact },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Git', icon: faGitAlt },
  ];

  return (
    <Container>
      <Row>
        {softwareList.map((software, index) => (
          <Col sm={6} md={4} lg={3} key={index}>
            <Card className="mb-3">
              <CardBody>
                <FontAwesomeIcon icon={software.icon} size="4x" className="mb-2" />
                <h5>{software.name}</h5>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

};


export default icons;
