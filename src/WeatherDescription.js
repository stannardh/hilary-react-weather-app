import React from "react";
import Footer from "./Footer";
import "./Weather.css";

export default function WeatherDesciption() {
  let weatherData = {
    city: "Estepona",
    temperature: 10,
    date: "Sunday, 20 December",
    description: "Sunny",
    imgUrl: "http://openweathermap.org/img/wn/03d@2x.png",
    humidity: 29,
    wind: 3
  };

  return (
    <div className="current">
      <div className="currentweather">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={weatherData.imgUrl}
              alt=""
              className="float-left"
              id="icon"
            />
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
              <h5 id="date">{weatherData.date}</h5>
              <h5 id="city">{weatherData.city}</h5>
              <div className="clearfix weather-temperature">
                <img src="" alt="" className="float-left" id="icon" />
                <strong id="temperature">{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>

              <div className="col-9">
                <ul className="weatherDescription">
                  <li id="humidity">Humidity:{weatherData.humidity}%</li>
                  <li id="wind">Wind speed:{weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
