import React from "react";
import "./Weather.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "5ae36e7a40754bfb55o3c43890a696t8";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-date">Thu</div>
          <div>icon_url</div>
          <span className="weather-forecast-temperature-max">19</span>{" "}
          <span className="weather-forecast-temperature-min">10</span>
        </div>
      </div>
    </div>
  );
}
