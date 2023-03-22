import React from "react";
import Weather from "./Weather";

export default function VideoBackground() {
  const videoSrc = "smoke.mp4";
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
      <Weather />
    </div>
  );
}
