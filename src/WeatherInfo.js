import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
            </li>
            <li>
              <div className="text-capitalize">{props.data.description}</div>
            </li>
            <li>
              Feels Like:
              <span className="text-capitalize conditions">
                {" "}
                {props.data.feel_like}°
              </span>
            </li>
            <li>
              Humidity:
              <span className="conditions"> {props.data.humidity}%</span>, Wind:
              <span className="conditions">
                {" "}
                {Math.round(props.data.wind)} mph
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={props.data.imgUrl} alt={"description"} />
            <strong>{Math.round(props.data.temperature)}</strong>
            <span className="units">°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
