import React, {useState} from "react"
import "./Weather.css"

export default function WeatherTemperature(props){
const [unit, setUnit] = useState ("celsius");

function showCelsius(event){
    event.preventDefault();
    setUnit ("celsius")
}

function fahrenheit(){
    return ((props.celsius *9/5)+32)
}

function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
}



 if (unit === "celsius"){
    return(
    <div className = "WeatherTemperature">
        <span id="temperature">Temperature: {Math.round(props.celsius)}</span>
                <span className="units">
                  °C
                  |{" "}
                  <a href="/" onClick={showFahrenheit}>
                  °F
                  </a>
                </span>
    </div>)
} else {
return (
    <div className = "WeatherTemperature">
        <span id="temperature">Temperature: {Math.round(fahrenheit())}</span>
                <span className="units">
                  <a href="/" onClick={showCelsius}>
                    °C
                  </a>{" "}
                  |
                  °F
                </span>
    </div>)
}
}