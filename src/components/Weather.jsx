import React from 'react'
import "./Weather.css";
import search_icon from '../assets/search.png';

const Weather = () => {

    const search = async () =>{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${import.meta.env.VITE_APP_ID}`
        } catch (error) {
            
        }
    }

  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search' />
            <img src={search_icon} alt='' />
        </div>
    </div>
  )
}

export default Weather