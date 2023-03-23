import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    let forecastImage = forecast[0].condition.icon_url;
    console.log(forecast);
    return (
      <div className='weather-forecast'>
        <div className='row'>
          <div className='col'>
            <div className='weather-forecast-date'>{forecast[0].time}</div>
            <div className='weather-forecast-date-icon'>
              <img
                src={forecastImage}
                alt={forecast[0].condition.description}
                width='36'
              />
            </div>
            <span className='weather-forecast-temperature-max'>
              {forecast[0].temperature.maximum}°
            </span>{' '}
            <span className='weather-forecast-temperature-min'>
              {forecast[0].temperature.minimum}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = '5ae36e7a40754bfb55o3c43890a696t8';
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
