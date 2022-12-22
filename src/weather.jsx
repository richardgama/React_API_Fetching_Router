import React from "react";
import { useState,useEffect } from 'react';

const Weather = () => {

    const [weather,useWeather] = useState([]);

    const urlWeather = "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,shortwave_radiation_sum&timezone=Europe%2FBerlin"
  
    const ApiCallWeather = async () => {
        const response = await fetch(urlWeather);
        const data = await response.json();
        console.log(data);
        useWeather(data);
      } 

    useEffect(
    () => {ApiCallWeather();}
    ,[])
  
    return(
        <>
            <br />
            <div style={{textAlign: 'center',alignItems: 'center',margin: 'auto'}}>
                Weather
            </div>
        </>
    )

}

export default Weather;