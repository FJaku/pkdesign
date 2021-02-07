import React, { useEffect, useState } from 'react'
import beh from '../img/icon-beh.svg'
import fb from '../img/icon-fb.svg'
import insta from '../img/icon-insta.svg'

const Contact = () => {

    const hideContact = () => {
        var x = document.getElementById('contactContainer')
        x.classList.remove('show')
        x.classList.add('hidden')
    }
    return (
        <>
                <div 
                    id="contactContainer"
                    className='hidden'>
                    <i 
                        className='fa fa-close' 
                        id="close"
                        onClick={() => hideContact()}>
                    </i>
                    <p id="contactUs">Contact Us</p>
                    <p id="email">patokolbasa@gmail.com</p>
                    <p id="social">
                        SOCIAL<br></br>

                        {/*Social icon links*/}
                        <a href="https://www.facebook.com/PatoKolbasaDesign" target="_blank" rel="noreferrer">
                            <img src={fb} alt='' className="contactIcon"></img>
                        </a> 
                        <a href="https://www.behance.net/patokolbas1145" target="_blank" rel="noreferrer">
                            <img src={beh} alt='' className="contactIcon"></img>
                        </a>
                        <a href="https://www.instagram.com/pato_kolbasa_design/" target="_blank" rel="noreferrer">
                            <img src={insta} alt='' className="contactIcon"></img>
                        </a>
                    </p>
                    
                </div>            
        </>
    )
}

export default Contact