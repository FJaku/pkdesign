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
                </ul>
            </div>            
        </>
    )
}

export default NavBar