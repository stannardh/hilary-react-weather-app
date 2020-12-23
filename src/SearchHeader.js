import React from "react";
import "./Weather.css";

export default function SearchHeader() {
  return (
    <header>
      <form id="search-form">
        <input
          type="search"
          id="city-search"
          placeholder="Search city"
          autoFocus="on"
        />
        <input type="submit" id="search-button" value="Seach" />
      </form>
    </header>
  );
}
