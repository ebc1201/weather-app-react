import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";
import "./index.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: response.data.time,
      desscription: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control search-input"
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
        <div className="WeatherInfo">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <span>{weatherData.date}</span>,{" "}
                  <span className="text-capitalize">
                    {weatherData.desscription}
                  </span>
                </li>
                <li>
                  Humidity:
                  <span className="percent"> {weatherData.humidity}%</span>,
                  Wind:
                  <span className="speed">
                    {" "}
                    {Math.round(weatherData.wind)} km/h
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img src={weatherData.imgUrl} alt={"description"} />
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span className="units">°F</span>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    );
  } else {
    const apiKey = "5ae36e7a40754bfb55o3c43890a696t8";
    let city = "Portland";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
