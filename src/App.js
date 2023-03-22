import React from "react";
import VideoBackground from "./VideoBackground";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <VideoBackground />

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
    </div>
  );
}
