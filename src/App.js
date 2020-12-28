
import React from "react";
import "./Weather.css";
import "./App.css"
import Search from "./Search";
import LocationButton from "./LocationButton";

export default function App() {
  return (
    <div className="container">
      <LocationButton />
      <Search defaultCity= "Madrid"/>
      
    </div>
  );
}
