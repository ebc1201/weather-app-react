import React from 'react';

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className='weather-forecast-date'>{props.data.time}</div>
      <div className='weather-forecast-date-icon'>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          width='36'
        />
      </div>
      <span className='weather-forecast-temperature-max'>
        {props.data.temperature.maximum}°
      </span>{' '}
      <span className='weather-forecast-temperature-min'>
        {props.data.temperature.minimum}°
      </span>
    </div>
  );
}
