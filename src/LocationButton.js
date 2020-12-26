import React from "react";
import "./Weather.css";


export default function LocationButton(response) {
 return <button id="locationButton">Current Location</button>

}

function handlePosition(position) {
  

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(handlePosition)