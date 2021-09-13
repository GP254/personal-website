import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const constants = {
  HEADING: 'My System',
  LIST: [
    'LEARN THROUGH CURIOSITY.',
    'DO LESS BUT BETTER.',
    'PRACTICE DAILY MINDFULNESS.',
    'ASK GOOD QUALITY QUESTIONS.',
    'ALWAYS CHALLENGE YOURSELF.'
  ]
};

const System = () => (
  <Container
    fluid
    style={{
      background: 'linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
    }}
    className="text-light pb-5"
  >
    <Row className=''>
      <Col md={8} className='mx-auto text-center'>
        <h1 className="display-3 mb-5">{constants.HEADING}</h1>
        {
          constants.LIST.map((item, id) => (
            <h4 key={`system-list-${id}`} className="display-5 font-weight-bold mb-4">{item}</h4>
          ))
        }
      </Col>
    </Row>
  </Container>
);

export default System;
