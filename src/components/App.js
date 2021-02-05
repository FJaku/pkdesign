import React from 'react'
import Intro from './intro'
import NavBar from './menu'
import Services from './services'
import AboutUs from './aboutUs'
import Projects from './projects'
import logo from '../img/logo.svg'


function App() {
  return (
    <>
      <img src={logo} id="logo" alt =''/>
      <NavBar />
      <Intro />
      <Services />
      <AboutUs />
      <Projects />
    </>
  );
}

export default App;
