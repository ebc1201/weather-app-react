import React from 'react';
import './Weather.css';

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day];
  }

  return (
    <div>
      <div className='weather-forecast-date'>{day()}</div>
      <div className='weather-forecast-date-icon'>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          width='36'
        />
      </div>
      <span className='weather-forecast-temperature-max'>{maxTemp()}</span>{' '}
      <span className='weather-forecast-temperature-min'>{minTemp()}</span>
    </div>
  );
}
