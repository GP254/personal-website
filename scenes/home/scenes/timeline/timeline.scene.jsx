import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md';

import ahc from '../../../../public/assets/ahc-main.png';
import uw from '../../../../public/assets/uw.png';

const constants = {
  HEADING: 'Timeline',
  EVENTS: [
    {
      type: 'job',
      date: 'May 2021 - Present',
      jobTitle: 'Frontend Developer',
      company: "Amans Henna Creations",
      description: 'Frontend Development, UI/UX Design',
      logo: {
        alt: 'Amans Henna Creations',
        img: ahc.src
      }
    },
    {
      type: 'school',
      date: 'September 2020 - Present',
      jobTitle: 'Mathematics Co-op',
      company: 'University of Waterloo',
      description: 'Advanced Mathematics, Computer Programming',
      logo: {
        alt: 'UW',
        img: uw.src
      }
    }
  ]
};

const Timeline = () => (
  <Container
    fluid
    style={{ backgroundColor: '#ebedef' }}
    className='pb-5'
  >
    <Row>
      <Col md={8} className='mx-auto text-center'>
        <h1 className="display-3">
          {constants.HEADING}
        </h1>
        <VerticalTimeline>
          {
            constants.EVENTS.map(({type, date, jobTitle, company, description, logo}, id) => (
              <VerticalTimelineElement
                key={`timeline-${id}`}
                className="vertical-timeline-element--work"
                contentStyle={{
                  borderRadius: '21px',
                  textAlign: 'left',
                }}
                contentArrowStyle={{ borderRight: '7px solid  #FFFFFF' }}
                date={date}
                iconStyle={{ background: '#2E77BD', color: '#FFFFFF' }}
                icon={type === 'job' ? <MdWork fill='#FFFFFF'/> : <MdSchool fill='#FFFFFF'/>}
              >
                <Row>
                  <Col md={8}>
                    <h4>{jobTitle}</h4>
                    <h5>{company}</h5>
                    <p>{description}</p>
                  </Col>
                  <Col md={4} className='d-none d-md-block'>
                    <img
                      alt={logo.alt}
                      src={logo.img}
                      style={{
                        margin: 'auto',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: '100px',
                        borderRadius: '20px'
                      }}
                    />
                  </Col>
                </Row>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
      </Col>
    </Row>
  </Container>
);

export default Timeline;
