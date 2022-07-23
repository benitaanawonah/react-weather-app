import React from "react";
import { useState } from "react";
import axios from "axios";
import "./weather.css"
import WeatherInfo from "./weatherInfo";
import WeatherForcast from "./weatherForecast";


export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity)
    const [weatherData, setWeatherData] = useState({ready: false});
    
    function handleResponse(response) {
        

        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,   
        });  
    }

    function search() {
    const apiKey = "0f8c88146a435b8db9d6af1cacbbc02a";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        //search for a city
        search()
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }



    if (weatherData.ready) {
        return ( 
        <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control"
            autoFocus="on" 
            onChange={handleCityChange}/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
            </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForcast coordinates={weatherData.coordinates} />


        
    </div>
    );
} else {
    search();
    
return "Loading..."

}
        
}