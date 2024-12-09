import React, { useState } from "react";
 
const API_KEY = "be8a610c0ccbe301f334023ca862d9ec";
 
function Weather() {

  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
 
  const fetchWeather = () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
 
    setLoading(true);
    setError("");
    setWeatherData(null);
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
 
  const getWeatherIcon = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
 
if (error){
  return <p>{error}</p>
}
     
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

 