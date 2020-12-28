import React from "react";
import FormattedDate from "./FormattedDate";
import Footer from "./Footer"
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props){

  return (
  <div className= "weatherInfo">
    <div className="current">
      <div className="currentweather">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.data.icon} alt={props.data.description} />
            <div className="row" id="description">
              {props.data.description}
              <p className="card-text">
                <small className="text-muted" id="lastUpdate">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 id="date"><FormattedDate date={props.data.date}/></h5>
              <h5 id="city">{props.data.city}</h5>
              <div id = "weatherData"></div>
                <div className="clearfix weather-temperature">
                <img src="" alt="" className="float-left" id="icon" />
                <WeatherTemperature celsius = {props.data.temperature}/>
                
                <div className="col-9">
                  <ul className="weatherDescription">
                  <li id="humidity">Humidity: {props.data.humidity}%</li>
                  <li id="wind">Wind Speed: {Math.round(props.data.wind)} km/h</li>
                  </ul>
              
              </div>
            </div>
            </div>
          </div>
        </div>
        
        </div>
        <div><Footer/></div>
        
    </div>
        
  </div>)
}