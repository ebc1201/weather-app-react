import React, { useState, useEffect } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='weather-forecast'>
        <div className='row'>
          <div className='col'>
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[4]} />
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
