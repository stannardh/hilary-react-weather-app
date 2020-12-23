import './App.css';

import React from "react";
import "./Weather.css";
import Search from "./Search";
import LocationButton from './LocationButton';
export default function App() {
  return (
    <div>
      <LocationButton />
      <Search />
    </div>
  );
}
