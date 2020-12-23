import './App.css';

import React from "react";
import "./Weather.css";
import SearchHeader from "./SearchHeader";
import CurrentButton from "./CurrentButton";
import WeatherDescription from "./WeatherDescription";

export default function WeatherApp() {
  return (
    <div>
      <SearchHeader />
      <CurrentButton />
      <WeatherDescription />
    </div>
  );
}
