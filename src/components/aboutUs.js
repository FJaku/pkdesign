import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import PK from '../img/headshot.svg'
import skills from '../img/skills.svg'
import languages from '../img/languages.svg'
import FadeInSection from './fade'

const AboutUs = () => {
    return (
        <div 
            id ="aboutUsContainer"
            className="hidden"
        >
            <img src={PK} alt='' id='PK'></img>
            <p className="pageName pageNameYellow">ABOUT US</p>
            <FadeInSection>
                <div className="colorCollumn yellowCollumn"></div>
                <p className="mainHeader">"Energy that brings ideas to life."</p>
            </FadeInSection>
            <FadeInSection>
                <p 
                    className="aboutUs" 
                    id="aboutUs1"
                >
                    I have been drawn to the aesthetic and visual side of everyday things ever
                    since my childhood. This profession has been my passion throughout my entire life. 
                </p>
            </FadeInSection>
            <FadeInSection>
                <p 
                    className="aboutUs" 
                    id="aboutUs2"
                >
                    My area of expertise ranges from industrial design, which is my primary focus,
                    through graphic and web design and company branding. Confidence, 
                    perfectionism and indepedence are the qualities that have helped me
                    build this brand.
                </p>
            </FadeInSection>
            <FadeInSection>
                <p 
                    className="aboutUs" 
                    id="aboutUs3"
                >
                    My work brings a new dimension to the world, helping it move towards
                    the future one design at a time. 
                </p>
            </FadeInSection>
            <FadeInSection>
                <img src={skills} alt='' id='skills'></img>
            </FadeInSection>
            <FadeInSection>
                <img src={languages} alt='' id='languages'></img>
            </FadeInSection>
            <FadeInSection>
                <p 
                    id="education"
                >
                    EDUCATION
                </p>
                <div id="educationDetails">
                    <span>
                        2011 - 2015 &nbsp;&nbsp;&nbsp; Škola úžitkového výtvarníctva Košice
                    </span>
                    <pre>                        Propagačné výtvarníctvo</pre> 

                    <span>
                        2015 - 2021 &nbsp;&nbsp; Technical University of Košice
                    </span>
                        <pre>                        Design (Industrial design)</pre>
                </div>
            </FadeInSection>  
            
            
        </div>
    )
}

export default AboutUs