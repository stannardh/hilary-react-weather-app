
import React from "react";
import "./Weather.css";
import "./App.css"
import Search from "./Search";

export default function App() {
  return (
    <div className="container">
      <Search defaultCity= "Madrid"/>
      
    </div>
  );
}
