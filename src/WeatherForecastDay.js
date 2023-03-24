import React from 'react';

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className='weather-forecast-date'>{props.time}</div>
      <div className='weather-forecast-date-icon'>
        <img
          src={props.condition.icon_url}
          alt={props.condition.description}
          width='36'
        />
      </div>
      <span className='weather-forecast-temperature-max'>
        {props.temperature.maximum}°
      </span>{' '}
      <span className='weather-forecast-temperature-min'>
        {props.temperature.minimum}°
      </span>
    </div>
  );
}
