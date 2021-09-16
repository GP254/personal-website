import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import {MdOpenInNew} from 'react-icons/md';
import {RiGithubLine} from 'react-icons/ri';
import {FaAppStore} from 'react-icons/fa';
import {RiGooglePlayLine} from 'react-icons/ri';

import docucode from '../../../../public/assets/docucode.svg';
import curiositree from '../../../../public/assets/curiositree.svg';
import person from '../../../../public/assets/person.svg';
import polynomial from '../../../../public/assets/polynomial.svg';
import ahc from '../../../../public/assets/ahc.svg'

import { ProjectCard } from './projects.styles';

const constants = {
  HEADING: 'Recent Projects',
  PROJECTS: [
    {
      title: 'Amans Henna Creations',
      description: 'Developed website and co-founded Amans Henna Creations, a local henna business.',
      bgImg: ahc.src,
      icons: [
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://amanshennacreations.netlify.app'
        }
      ],
      pills: ['React', 'Next.js', 'Node', 'Styled-Components']
    },
    {
      title: 'Curositree',
      description: 'Developed front-end of learning app based on the first principles thinking with the goal of helping users to learn and understand concepts faster.',
      bgImg: curiositree.src,
      icons: [],
      pills: ['React', 'Next.js', 'Styled-Components']
    },
    {
      title: 'DocuCode',
      description: 'Developed Github documentation website for documenting github repositories and files in a minimalistic and organized fashion provided the users github repository link.',
      bgImg: docucode.src,
      icons: [
        {
        component: <MdOpenInNew fill='#2E77BD' size={20}/>,
        url: 'https://docucode.netlify.app'
        }
      ],
      pills: ['React', 'Next.js', 'Bootstrap', 'Styled-Components', 'GitHub API', 'Node']
    },
    {
      title: 'Polynomial-Graphing-Tool',
      description: 'Developed Python GUI for users to graph any polynomial and it’s first and second derivatives.',
      icons: [],
      bgImg: polynomial.src,
      pills: ['Python', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Personal Website',
      description: 'The page you are currently on. Developed website to showcase my work experience and past projects in greater detail.',
      bgImg: person.src,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/GP254'
        },
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://gurkirat-panesar.netlify.app'
        }
      ],
      pills: ['React', 'Next.js', 'Bootstrap', 'Styled Components']
    }
  ]
}

const Projects = () => {

  const renderIcons = icons => (
    <div className='d-inline-block w-25 text-right align-top'>
      {
        icons.map(({component, url}, id) => (
          <a className='ml-2' href={url} key={`project-icon-${url}-${id}`} target='_blank'>
            {component}
          </a>
        ))
      }
    </div>
  );

  const renderPills = (title, pills) => (
    <span>
      {
        pills.map((pill, id) => (
          <span
            key={`${title}-pill-${id}`}
          >
            <Badge pill style={{backgroundColor: '#2E77BD', color: 'white'}}>
              {pill}
            </Badge>{' '}
          </span>
        ))
      }
    </span>
  )

  return(
    <Container
      fluid
      style={{ backgroundColor: '#ebedef' }}
      className='pb-5'
    >
      <Row>
        <Col md={8} className='mx-auto text-center'>
          <h1
            className="display-3 mb-5 font-weight-bold"
            style={{
              color: '#797979'
            }}
          >{constants.HEADING}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={10} className='mx-auto'>
          <Row>
            {
              constants.PROJECTS.map(({title, description, bgImg, icons, pills}, id)=> (
                <Col
                  key={`project-${title}-${id}`}
                  lg={12}
                  xl={6}
                  className='mb-4 position-relative'
                >
                  <ProjectCard
                    className=' p-4'
                    image={bgImg}
                  >
                    <div className='d-inline-block w-75'>
                      <h4 className='font-weight-bold mb-4' style={{fontSize: '25px'}}>{title}</h4>
                      <h5
                        style={{
                          fontSize: '18px',
                          backgroundColor: 'white',
                          borderRadius: '20px'
                        }}
                        className='mb-4'
                      >{description}</h5>
                      {renderPills(title, pills)}
                    </div>
                    {renderIcons(icons)}
                  </ProjectCard>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
