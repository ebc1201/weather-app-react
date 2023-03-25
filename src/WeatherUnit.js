import React from 'react';

export default function WeatherUnit(props) {
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  return (
    <div className='d-flex WeatherUnit temp'>
      <strong>{Math.round(fahrenheit)}</strong>
      <span className='units'>°F</span>
    </div>
  );
}
