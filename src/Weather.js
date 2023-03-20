import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Mobile",
    date: "Tuesday 11:00",
    temperature: 73,
    description: "cloudy",
    imgUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAg5JREFUeNrt2tGRgyAQBmBLoARLSAmUkBIsISVYgiVYgiVQgq//myXQAfdwS4bJqRFuCWjWmZ3JaGYin8AumMY513xzNAIgAAIgAAIgAAIgAAIgAALwe4LhANACGADMANxLzHStbQoc2QGoce5g9JcBAKA2nvi7mAGoUwP8o/FPhOoBAGgAIwBD0ftxHNntiw6HJICdBiqa8BxD2E9MjNEAAO4bNzwxPn0fA/WsbNkjBWDZuNkHXZ8ZAQ5DfQQAwG3nJjR9xxWKpOwRC6D3AGgOcGdCYAMI0p8rHEMWAGq82Zit++B7roJoWQEAdBs/NPouR/PDUAnAwAaw0+27YKEzVdLw6EryCIDZabymIeBqC06AP93+QEa4LMASlLv2GwF81zc1N54bwJe29kA1WHMY/wBjAe4vY388KUBYLbY5FkNniudSOwXAXSTmlLWAKtRl/a4T91K7qxlgXKvpKQVzzUOmxiFgg70FBeBBu0I9fVacVWiNk6AOFmB2A6gLUrIO9wAoa5mcADnT4Phm9blWlClC0B6Pzve5AHIWQm1EmW1pSNiVcv129GGlboubXGmJGsWS56l37GFOqQA5FkMmputGDKeRLQ1+4mAEWKp4OxzR6KXEirA4QOZ9RPPuHWNRAMb3iMmbpKUBdOkNktIAt+oB5F9iAiAAAiAAAiAAAiAAAiAAAiAAAiAAl48fFVnRpiVnD+AAAAAASUVORK5CYII=",
    humidity: 90,
    wind: 10,
  };
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
          <div className="col-3 p-0">
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
                <span>{weatherData.description}</span>
              </li>
              <li>
                Humidity:
                <span className="percent"> {weatherData.humidity}%</span>, Wind:
                <span className="speed"> {weatherData.wind}km/h</span>
              </li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img src={weatherData.imgUrl} alt={weatherData.description} />
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">°F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
