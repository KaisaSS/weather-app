import React from "react";
import "./weatherinfo.css";

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <h1 className="day-dayname">Day here</h1>
      <div className="day-logo">
        <p>Logo here</p>
        <h3 className="description">Description here</h3>
      </div>
      <div className="weather-info-container">
        <div className="value-container">
          <p>Temperature:</p>
          <p>value</p>
        </div>
        <div className="value-container">
          <p>Wind:</p>
          <p>value</p>
        </div>
        <div className="value-container">
          <p>Humidity:</p>
          <p>value</p>
        </div>
        <div className="value-container">
          <p>Max-temperature:</p>
          <p>value</p>
        </div>
        <div className="value-container">
          <p>Min-temperature:</p>
          <p>value</p>
        </div>
        <div className="value-container">
          <p>Feels like:</p>
          <p>value</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
