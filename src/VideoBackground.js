import React from "react";
import Weather from "./Weather";
import videoSrc from "./smoke.mp4";

export default function VideoBackground() {
  const styles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    objectFit: "cover",
  };

  return (
    <div>
      <video autoPlay muted loop style={styles}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        style={{
          backgroundImage: "smoke.mp4",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundSize: "cover",
        }}
      ></div>
      <Weather defaultCity="New York" />
    </div>
  );
}
