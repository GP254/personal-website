import React from 'react';
import Header from './scenes/header/header.scene'
import Timeline from './scenes/timeline/timeline.scene';
import System from './scenes/system/system.scene';
import Projects from './scenes/projects/projects.scene';
import Resume from './scenes/resume/resume.scene';
import Footer from './scenes/footer/footer.scene';
import Wave from '../../components/wave/wave.component';

const LightWave = () => (
  <Wave
    fill='#EBEDEF'
    bg='linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
  />
);

const DarkWave = () => (
  <Wave
    fill='url(#gradient)'
    bgColor='#EBEDEF'
  >
    <defs>
      <linearGradient id="gradient">
        <stop offset="0%"  stopColor="#524AB9" />
        <stop offset="100%" stopColor="#1CA2C0" />
      </linearGradient>
    </defs>
  </Wave>
);

const HomeScene = () => (
  <>
    <Header/>
    <LightWave/>
    <Timeline/>
    <DarkWave/>
    <System/>
    <LightWave/>
    <Projects/>
    <DarkWave/>
    <Resume/>
    <LightWave/>
    <Footer/>
  </>
);

export default HomeScene
