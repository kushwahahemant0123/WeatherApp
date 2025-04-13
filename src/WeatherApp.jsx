import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city :"Begamganj",
        temp: 25.05,
            tempMin: 25.05,
            rempMax:25.05,
            humidity:47,
            feelsLike:24.84,
            weather: "haze",
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Hemant Kushwha (Avi)</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}