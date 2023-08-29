import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const constants = {
  HEADING: 'Resume'
};

const Resume = () => (
  <Container
    fluid
    style={{
      background: 'linear-gradient(90deg, #000000 0%, #1CA2C0 100%)'
    }}
    className="text-light pb-5"
  >
    <Row className=''>
      <Col md={8} className='mx-auto text-center'>
        <h1 className="display-3 mb-5">{constants.HEADING}</h1>
        <iframe
          style={{
            width: '100%',
            height: '800px'
          }}
          name='Gurkirat Panesar Resume'
          src='./resume.pdf'>
        </iframe>
      </Col>
    </Row>
  </Container>
);

export default Resume;
