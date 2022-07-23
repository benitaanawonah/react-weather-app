import WeatherIcon from "./weatherIcon"
import "./weatherForecast.css"
import axios from "axios";
import { useState, useEffect } from "react";
import WeatherForecastDay from "./weatherForecastDay";


export default function WeatherForcast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false)
    }, [props.coordinates])
    
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    

    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 6) {
                        return (
                            <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                            
                            </div>
                        );
                    } else {
                        return null;
                    }
                    })}
                   
                    
                    
                </div>
            </div>
            
            );

            
    
    } else {
        let apiKey = "0f8c88146a435b8db9d6af1cacbbc02a";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse)
    
        return null; 
    }

    
    
    
    
}