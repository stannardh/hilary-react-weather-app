import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import LoaderSpinner from "./LoaderSpinner"


export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState (props.defaultCity)

  function showWeather(response) {
    setWeatherData({
      ready:true,
      
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000) 
    });
   
  };
 

  function Search(){
    let apiKey = "ecdd330b9998a88e5537e325e879fa9c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);

  }

  function handleSubmit(event){
    event.preventDefault()
    Search(city)
  }

  function handleChange (event){
    setCity(event.target.value)
  }

  if (weatherData.ready){
   
    return (
    <div id = "search-city">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search" id="city-search" onChange= {handleChange}/>
        <input type="submit" id= "search-button" value="Search" />
      </form>
      

      <WeatherInfo data = {weatherData}/></div>
    );
      } 
      
  else  {
    Search()
    return <div><LoaderSpinner/></div>
  
  }}

  