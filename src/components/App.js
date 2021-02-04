import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Intro from './intro'
import NavBar from './menu'
import Services from './services'
import AboutUs from './aboutUs'
import logo from '../img/logo.svg'

function App() {
  return (
    <>
      <img src={logo} id="logo" alt =''/>
      <NavBar />
      <Intro />
      <Services />
      <AboutUs />
    </>
  );
}

export default App;
