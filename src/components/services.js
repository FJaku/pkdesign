import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import FadeInSection from './fade'

const Services = () => {

    return (
        <div 
            id ="servicesContainer" 
            className='hidden'
        >
            
            <p className="pageName pageNamePink">SERVICES</p>
            <FadeInSection>
                <div className="colorCollumn pinkCollumn"></div>
                <p className="mainHeader">"Make it simple, but remarkable."</p>
                <div id="servicesLeftDiv">
                    <p>Industrial design</p>
                    <p>Product design</p>
                    <p>Graphic design</p>
                    <p>Web design</p>
                    <p>Branding</p>
                </div><div id="servicesRightDiv">
                    <p>Prototyping</p>
                    <p>3D modeling</p>
                    <p>Animation</p>
                    <p>2D graphics</p>
                </div>
            </FadeInSection>
        </div>
    )
}

export default Services