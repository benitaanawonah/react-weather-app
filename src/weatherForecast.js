import WeatherIcon from "./weatherIcon"
import "./weatherForecast.css"
import axios from "axios";
import { useState } from "react";
import WeatherForecastDay from "./weatherForecastDay";


export default function WeatherForcast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    

    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                    
                    </div>
                    
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