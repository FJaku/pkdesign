import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'

const Intro = () => {
    
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