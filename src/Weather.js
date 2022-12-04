import React, { useState } from "react";
import axios from 'axios';


export default function Weather() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "985ae9a331b0fd645d56adc3e192a05e";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayWeather);
    }
  
    function changeCity(event) {
      setCity(event.target.value);
    }
    let form = (
      <form onSubmit={handleSubmit}>
        <input type="Search" placeholder="Type a city" onChange={changeCity} />
        <button type="Submit">Search</button>
      </form>
    );
  
    if (loaded) {
      return (
        <div>
          {form}
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}ºC</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km/h</li>
            <li>Description: {weather.description}</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      );
    } else {
      return form
      ;
    }
  }
  