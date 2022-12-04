import React from "react";
import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WEATHER APP</h1>
      <Weather/>
      </header>
      <p><a href="https://github.com/higidamah/weather-react"target="_blank" rel="noreferrer">Open-source code</a> by Damaris Higi</p>
    </div>
  );
}

export default App;
