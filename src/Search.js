import React,{useState} from "react";
import "./Weather.css";
import axios from "axios"
import Footer from "./Footer"



export default function Search(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  

  function showWeather(response) {
    setWeather({
      temperatureCelsius: response.data.main.temp,
      temperatureFahrenheit: ((response.data.main.temp)* 9) / 5 + 32,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

   function showForecast(event) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8282d3ebf715726bc4f5fc0059ed8b10&units=metric`;
    axios.get(url).then(showWeather);
    event.preventDefault();
  
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div id = "search-city">
      <form onSubmit={showForecast}>
        <input type="search" placeholder="Search" id="city-search" onChange={updateCity} />
        <input type="submit" id= "search-button" value="Search" />
      </form>

      <div className="current">
        <div className="currentweather">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={weather.icon} alt={weather.description} />
            <div className="row" id="description">
              {weather.description}
              <p className="card-text">
                <small className="text-muted" id="lastUpdate">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 id="date">{weather.date}</h5>
              <h5 id="city">{city}</h5>
              <div id = "weatherData"></div>
                <div className="clearfix weather-temperature">
                <img src="" alt="" className="float-left" id="icon" />
                <strong id="temperature">Temperature: {Math.round(weather.temperatureCelsius)}°C</strong>
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
                  <li id="humidity">Humidity: {weather.humidity}%</li>
                  <li id="wind">Wind Speed: {Math.round(weather.wind)} km/h</li>
                  </ul>
              
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div><Footer/></div>
        </div>
      </div>);}