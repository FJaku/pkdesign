import React, { useEffect, useState } from 'react'
import FadeInSection from './fade'

const Projects = () => {

    const [designImages, setDesignImages] = useState ('')
    const [graphicsImages, setGraphicsImages] = useState ('')
    const [artImages, setArtImages] = useState ('')

    //Import images from /img/designs
    useEffect(() => {
        const importAll = (r) => {
            return r.keys().map(r);
        }   
        setDesignImages((importAll(require.context('../img/portfolio/designs', false, /\.(png|jpe?g|svg)$/)))) //load design portfolio images
        setGraphicsImages((importAll(require.context('../img/portfolio/graphics', false, /\.(png|jpe?g|svg)$/)))) //load graphics portfolio images
        setArtImages((importAll(require.context('../img/portfolio/art', false, /\.(png|jpe?g|svg)$/)))) //load art portfolio images
    },[])
       
    //Show next sibling of <p> - the image of given design
    const showPortfolioImg = (e) => {
        e.target.nextElementSibling.style.width = "75%"
    }

    //Hide image, scroll to previos sibling
    const hidePortfolioImg = (e) => {
        e.target.style.width = "0"
        e.target.previousElementSibling.scrollIntoView({ behavior: 'smooth' })
    }

    //Portfolio items - names
    const designItems = ['CYCHO ESCOOTER', 'ČAPNI', 'ESS', 'GILLS', 'CONTROLLER', 'MAJI SAFI', 'MULTITOOL', 'TUKE RINGS', 'WIOU']
    const graphicsItems = ['LOGO DESIGN', 'BEZ BARIÉRY WEB DESIGN', 'EDUMY', 'STĹPY SRMTI', 'MENTAL HEALTH WEB DESIGN']
    const artItems = ['PAINTINGS', 'CARICATURES', 'SKETCHES']

    //Render items - <p> and <img>    
    const RenderItems = (props) => {
        if (props.images) { //Check if images have been loaded
            return (
                props.items.map( (x,y) => 
                    <div key={`a${y}`}>
                        <p className={`portfolioItem ${props.class}`} onClick={(e) => showPortfolioImg(e)}>{x}</p> 
                        <img className='portfolioIMG' src={props.images[y].default} onClick={(e) => hidePortfolioImg(e)} alt=''></img>  
                    </div> 
                )
            )   
        } else {
            return (
                <>
                </>
            )            
        }
    }

    return (
        <div 
            id="projectsContainer"
            className="hidden"
        >
            <div
                id="designContainer"
                className="portfolioContainer"
            >
                <p className='para'>DESIGN</p> 
                <FadeInSection>
                    <RenderItems images={designImages} items={designItems} class='designItem' /> 
                </FadeInSection>
                              
            </div>
            <div
                id="graphicsContainer"
                className="portfolioContainer"
            >
                <p className='para'>GRAPHICS</p>
                <FadeInSection>
                    <RenderItems images={graphicsImages} items={graphicsItems} class='graphicsItem'/> 
                </FadeInSection>
                
            </div>
            <div
                id="artContainer"
                className="portfolioContainer"
            >
                <p className='para'>ART</p> 
                <FadeInSection>
                    <RenderItems images={artImages} items={artItems} class='artItem'/> 
                </FadeInSection>
                
            </div>
        </div>
    )
}

export default Projects