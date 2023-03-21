import "./Weather.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Erica Chambers and is
        <a
          href="https://github.com/ebc1201/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
