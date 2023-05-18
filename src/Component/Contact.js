import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <Form>
        <FormGroup controlId="email">
          <FormLabel>Email:</FormLabel>
          <FormControl type="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup controlId="phone">
          <FormLabel>Phone Number:</FormLabel>
          <FormControl type="tel" placeholder="Enter your phone number" />
        </FormGroup>
        <FormGroup controlId="message">
          <FormLabel>Message:</FormLabel>
          <FormControl as="textarea" rows="5" placeholder="Enter your message" />
        </FormGroup>
        <Button type="submit" className="btn btn-primary">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;