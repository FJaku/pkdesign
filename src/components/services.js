import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'

const Services = () => {

    const services = useSelector(state => state.servicesReducer)
    return (
        <div 
            id ="services" 
            className={services}
        >
            aa
        </div>
    )
}

export default Services