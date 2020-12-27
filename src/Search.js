import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import LoaderSpinner from "./LoaderSpinner";
import WeatherInfo from "./WeatherInfo"


export default function Search() {
  const [weatherData, setWeatherData] = useState({ready: false});
  

  function showWeather(response) {
    setWeatherData({
      ready:true,
      
      temperatureCelsius: response.data.main.temp,
      temperatureFahrenheit: ((response.data.main.temp)* 9) / 5 + 32,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000) 
    });
   
  };

  if (weatherData.ready){
   
    return (
    <div id = "search-city">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search" id="city-search" />
        <input type="submit" id= "search-button" value="Search" />
      </form>
      

      <WeatherInfo data = {weatherData}/></div>
    );
      } 
      
  else  {
    let apiKey = "ecdd330b9998a88e5537e325e879fa9c";
    let city = "London"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
    

    return <div id="spinner"><LoaderSpinner/></div>
  
  }}