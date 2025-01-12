import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md';

import ahc from '../../../../public/assets/ahc-main.png';
import uw from '../../../../public/assets/uw.png';
import mcap from '../../../../public/assets/mcap.png';
import york from '../../../../public/assets/york.png';

const constants = {
  HEADING: 'Timeline',
  EVENTS: [
    {
      type: 'job',
      date: 'Aug 2024 – Nov 2024',
      jobTitle: 'GIS Library Associate',
      company: "University Of Waterloo",
      description: 'Data Science, Geographic Information Systems (GIS), Airphoto & Data Repository',
      logo: {
        alt: 'Waterloo Logo',
        img: uw.src
      }
    },
    {
      type: 'job',
      date: 'Jan 2024 – Apr 2024',
      jobTitle: 'Data Analytics Technician',
      company: "York Region - Corporate Services",
      description: 'Data Science, Geographic Information Systems (GIS), Urban Planning',
      logo: {
        alt: 'York Region',
        img: york.src
      }
    },
    {
      type: 'job',
      date: 'Jan 2022 – Apr 2022',
      jobTitle: 'Jr. QA Developer',
      company: "MCAP Financial Corportation",
      description: 'Automation Testing, Quality Assurance, API/Performance Testing',
      logo: {
        alt: 'MCAP Financial Corportation',
        img: mcap.src
      }
    },
    {
      type: 'job',
      date: 'Jan 2020 – May 2020',
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
      date: '2022 - Present',
      jobTitle: 'Geomatics Co-op',
      company: 'University of Waterloo',
      description: 'GIS, Computer Programming, Mathematics, Data Science',
      logo: {
        alt: 'UW',
        img: uw.src
      }
    },
    {
      type: 'school',
      date: '2020 - 2022',
      jobTitle: 'Applied Mathematics w/ Scientific Computing Co-op',
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
