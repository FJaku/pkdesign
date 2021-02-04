import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'

const Intro = () => {

    setTimeout(() => {
        var x = document.getElementById('introDesign')
        var y = document.getElementById('introGraphics')
        var z = document.getElementById('introArt')
        setTimeout(() => {
            x.classList.add('highlightDesign')            
        }, 200);
        setTimeout(() => {
            x.classList.remove('highlightDesign') 
            y.classList.add('highlightGraphics')            
        }, 700);
        setTimeout(() => {
            y.classList.remove('highlightGraphics')  
            z.classList.add('highlightArt')            
        }, 1200);
        setTimeout(() => {
            z.classList.remove('highlightArt')             
        }, 1700);
    }, 500);
    
    return (
        <div id="introContainer" className='shown'>
            <p
                className="introText"
                id="introDesign"
                
            >
                DESIGN
            </p>
            <p
                className="introText"
                id="introGraphics"
            >
                GRAPHICS
            </p>
            <p
                className="introText"
                id="introArt"
            >
                ART . . .
            </p>
        </div>
    )
}

export default Intro