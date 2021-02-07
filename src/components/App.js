import React from 'react'
import Intro from './intro'
import NavBar from './menu'
import Services from './services'
import AboutUs from './aboutUs'
import Projects from './projects'
import Contact from './contact'
import logo from '../img/logo.svg'


function App() {

  //Hide previous selection
  const clear = () => {
    var x = document.getElementsByClassName('shown')
    console.log(x)
    x[0].classList.add('hidden')
    x[0].classList.remove('shown')
  }
  const show = (y) => {
    var x = document.getElementById(y)
    x.classList.remove('hidden')
    x.classList.add('shown')
} 
  return (
    <>
      <img 
        src={logo} 
        id="logo" 
        alt =''
        onClick={() => {
          clear()
          show('introContainer')}
        }/>
      <Contact />
      <NavBar />
      <Intro />
      <Services />
      <AboutUs />
      <Projects />  
    </>
  );
}

export default App;
