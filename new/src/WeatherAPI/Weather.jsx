import React, { useState } from "react";
 
const API_KEY = "be8a610c0ccbe301f334023ca862d9ec";
 
function Weather() {

  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
 
  

     
  return (
<div className="weather-app">
<header className="header">
<h1>Weather App</h1>
</header>
<div className="search-container">
<input

          type="text"

          placeholder="Enter city name"

          value={city}

          onChange={(e) => setCity(e.target.value)}

        />
<button onClick={fetchWeather}>Get Weather</button>
</div>

     
      
</div>

  );

}
 
export default Weather;

 