import React from 'react'

const Intro = () => {

    //Hide previous selection
    const clear = () => {
        var x = document.getElementsByClassName('shown')
        x[0].classList.add('hidden')
        x[0].classList.remove('shown')
    }

    //Go to selection
    const show = (y) => {
        var x = document.getElementById(y)
        x.classList.remove('hidden')
        x.classList.add('shown')
    }   

    const goTo = (y) => {
        clear()
        show('projectsContainer')
        document.getElementById(`${y}Container`).scrollIntoView({ behavior: 'smooth' })
    }

    
    return (
        <div id="introContainer" className='shown'>
            <p
                className="introText"
                id="introDesign"
                onClick={() => goTo('design')}
            >
                DESIGN
            </p>
            <p
                className="introText"
                id="introGraphics"
                onClick={() => goTo('graphics')}
            >
                GRAPHICS
            </p>
            <p
                className="introText"
                id="introArt"
                onClick={() => goTo('art')}
            >
                ART . . .
            </p>
        </div>
    )
}

export default Intro