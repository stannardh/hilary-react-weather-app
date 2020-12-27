import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import Footer from "./Footer";
import FormattedDate from "./FormattedDate";
import LoaderSpinner from "./LoaderSpinner"


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
      <form>
        <input type="search" placeholder="Search" id="city-search" />
        <input type="submit" id= "search-button" value="Search" />
      </form>

      <div className="current">
        <div className="currentweather">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={weatherData.icon} alt={weatherData.description} />
            <div className="row" id="description">
              {weatherData.description}
              <p className="card-text">
                <small className="text-muted" id="lastUpdate">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 id="date"><FormattedDate date={weatherData.date}/></h5>
              <h5 id="city">{weatherData.city}</h5>
              <div id = "weatherData"></div>
                <div className="clearfix weather-temperature">
                <img src="" alt="" className="float-left" id="icon" />
                <strong id="temperature">Temperature: {Math.round(weatherData.temperatureCelsius)}°C</strong>
                <span className="units">
                  <a href="/" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" id="fahrenheit-link">
                  °F
                  </a>
                </span>
                

                <div className="col-9">
                  <ul className="weatherDescription">
                  <li id="humidity">Humidity: {weatherData.humidity}%</li>
                  <li id="wind">Wind Speed: {Math.round(weatherData.wind)} km/h</li>
                  </ul>
              
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div><Footer/></div>
        </div>
      </div>);
      } 
      
  else  {
    let apiKey = "ecdd330b9998a88e5537e325e879fa9c";
    let city = "London"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
    

    return <div id="spinner"><LoaderSpinner/></div>
  
  }}