import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import {MdOpenInNew} from 'react-icons/md';
import {RiGithubLine} from 'react-icons/ri';

import docucode from '../../../../public/assets/docucode.svg';
import curiositree from '../../../../public/assets/curiositree.svg';
import person from '../../../../public/assets/person.svg';
import polynomial from '../../../../public/assets/polynomial.svg';
import ahc from '../../../../public/assets/ahc.svg'
import gis from '../../../../public/assets/gisanalysis.png'

import { ProjectCard } from './projects.styles';

const constants = {
  HEADING: 'Recent Projects',
  PROJECTS: [
    {
      title: 'Crime Analysis of Waterloo Region ArcPy',
      description: "Conducted spatial and  crime analysis of Waterloo Region using ArcPy, automating workflows, and identifying crime trends to support public safety and urban planning.",
      bgImg: gis.png,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/GP254/Crime-Analysis-of-Waterloo-Region-ArcPy'
        }],
      pills: ['ArcGIS', 'ArcPy', 'Jupyter Notebook', 'Python', 'Matplotlib', 'Pandas']
    },
    {
      title: 'Nursing Workforce Spatial Data Analysis',
      description: "Conducted thorough spatial analysis on Canadian nursing workforce data using ArcGIS extracting valuable insights from diverse datasets and visualized trends through data manipulation and visualization techniques.",
      bgImg: gis.png,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/GP254/Canadian-Nursing-Workforce-and-Facility-Analysis/blob/main/Canadian-Nursing-Workforce-and-Facility-Analysis.ipynb'
        }],
      pills: ['ArcGIS', 'QGIS', 'Jupyter Notebook', 'Python', 'Matplotlib', 'Pandas']
    },
    {
      title: 'Student-Performance-Data-Analysis',
      description: "Conducted data analysis on student performance using Python, encompassing data visualization, statistical summaries, and linear regression models for math and writing scores.",
      bgImg: gis.png,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/GP254/Student-Performance-Data-Analysis/blob/main/Student%20Performance%20Data%20Analysis.ipynb'
        }],
      pills: ['Jupyter Notebook', 'Python', 'Numpy', 'Matplotlib', 'Sklearn', 'Seaborn', 'Plotly']
    },
    {
      title: 'Data Analysis Portfolio',
      description: "Used ArcGIS Storymap to create a centralized location to display all my Data Science and GIS projects and\n" +
          "experience in greater detail.",
      bgImg: gis.png,
      icons: [
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://storymaps.arcgis.com/stories/9cf5a12abeed45498e54d7f279e720d2'
        }],
      pills: ['ArcGIS StoryMaps']
    },
    {
      title: 'Amans Henna Creations',
      description: 'Developed website and co-founded Amans Henna Creations, a local henna business.',
      bgImg: ahc.src,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/GP254/amanshennacreations2022'
        },
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
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/apanesar11/curiositree-frontend'
        },
      {
        component: <MdOpenInNew fill='#2E77BD' size={20}/>,
        url: 'http://curiositree.herokuapp.com'
      }
      ],
      pills: ['React', 'Next.js', 'Styled-Components']
    },
    {
      title: 'DocuCode',
      description: 'Developed Github documentation website for documenting github repositories and files in a minimalistic and organized fashion provided the users github repository link.',
      bgImg: docucode.src,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/GP254/docu-code'
        },
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
      icons: [{
        component: <RiGithubLine fill='#2E77BD' size={20}/>,
        url: 'https://github.com/GP254/polynomial-graphing-tool'
      }],
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
          url: 'https://github.com/GP254/personal-website'
        },
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://gurkirat-panesar.netlify.app'
        }
      ],
      pills: ['React', 'Next.js', 'Bootstrap', 'Styled Components']
    },
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
