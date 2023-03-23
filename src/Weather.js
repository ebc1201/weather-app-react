import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForecast";
import "./Weather.css";
import "./App.css";
import "./index.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed / 1.609344,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
      feels_like: response.data.temperature.feels_like,
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    const apiKey = "5ae36e7a40754bfb55o3c43890a696t8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control search-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 pe-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

        <div>
          <WeatherForcast coordinates={weatherData.coordinates} />
        </div>
        <footer>
          This project was coded by Erica Chambers and is
          <a
            href="https://github.com/ebc1201/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
