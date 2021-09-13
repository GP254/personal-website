import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import working from '../../../../public/assets/working.jpg';
import {RiGithubLine, RiLinkedinLine} from 'react-icons/ri';

const constants = {
  INTRO: '👋 Hello! My name is',
  HEADING: "Gurkirat Panesar.",
  SUBHEADING: "I'm a student at the University of Waterloo and a passionate Web Developer.",
  ICONS: [
    {
      component: <RiGithubLine size={25} fill='#FFFFFF'/>,
      url: 'https://github.com/GP254'
    },
  ]
}

const Header = () => (
  <Container
    fluid
    className="text-light pt-5 pb-5"
    style={{
      background: 'linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
    }}
  >
    <Row className='pt-5 pb-5'>
      <Col md={8} className='pt-5 pb-5 mx-auto'>
        <Row>
          <Col md={12} lg={6} className='my-auto'>
            <h4
              className='display-5 text-light'
            >
              {constants.INTRO}
            </h4>
            <h1 className="display-3">{constants.HEADING}</h1>
            <h4 className="display-5 mb-3">{constants.SUBHEADING}</h4>
            {
              constants.ICONS.map(({component, url}, id) => (
                <a className='mr-2' href={url} key={`header-icon-${url}-${id}`} target='_blank'>
                  {component}
                </a>
              ))
            }
          </Col>
          <Col md={6} className='my-auto d-none d-lg-block'>
            <Image
              src={working.src}
              roundedCircle
              fluid
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Header
