import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {

    //Hide selection
    const clear = () => {
        var x = document.getElementsByClassName('shown')
        console.log(x)
        x[0].classList.add('hidden')
        x[0].classList.remove('shown')
    }

    //Show selection
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
                            show('aboutUs')}
                        }
                    >
                        About Us
                    </li>
                    <li
                        onClick={() => {
                            clear()
                            show('services')}
                        }
                    >
                        Services
                    </li>
                    <li
                        onClick={() => {
                            clear()
                            show('services')}
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