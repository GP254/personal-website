import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => (
  <Container
    fluid
    style={{
      backgroundColor: '#EBEDEF',
      color: '#797979'
    }}
    className='pb-5'
  >
    <Row>
      <Col className='mx-auto' md={8}>
        <div className='w-50 align-bottom d-inline-block'>
          <p>
            Personal website & portfolio by Gurkirat Panesar. <br/>
            Built with Next.js and hosted on Heroku.
          </p>
          <small>
            © 2021-2022 Gurkirat Panesar. All rights reserved.
          </small>
        </div>
        <div className='w-50 text-right align-bottom d-inline-block'>
          <p style={{color: '#2E77BD'}}>gurkirat.ca</p>
          <p>
            <a href="">LinkedIn</a>
            {' '}
            <a href="">Github</a>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Footer;
