import React from 'react'

const NavBar = () => {

    //Hide previous selection
    const clear = () => {
        var x = document.getElementsByClassName('shown')
        console.log(x)
        x[0].classList.add('hidden')
        x[0].classList.remove('shown')
    }

    //Go to selection
    const show = (y) => {
        var x = document.getElementById(y)
        x.classList.remove('hidden')
        x.classList.add('shown')
    }    

    const showContact = () => {
        var x = document.getElementById('contactContainer')
        x.classList.remove('hidden')
        x.classList.add('show')
    }

    return (
        <>
            <div id ="navBar">
                <ul>
                    <li
                        onClick={() => {
                            clear()
                            show('aboutUsContainer')}
                        }
                    >
                        About Us
                    </li>
                    <li
                        onClick={() => {
                            clear()
                            show('servicesContainer')}
                        }
                    >
                        Services
                    </li>
                    <li
                        onClick={() => {
                            clear()
                            show('projectsContainer')}
                        }                    
                    >
                        Projects
                    </li>  
                    <li
                        id="contactButton"
                        onClick={() => {
                            showContact()
                            show('projectsContainer')}
                        }                    
                    >
                        Contact
                    </li>                 
                </ul>
            </div>            
        </>
    )
}

export default NavBar