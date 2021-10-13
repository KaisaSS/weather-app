import React, { useState, useEffect } from "react";

const HourlyWeather = () => {
  const [filteredByHour, setFilteredByHour] = useState({});

  useEffect(() => {
    setFilteredByHour();
  }, []);

  return (
    <div className="weather-container">
      <h1 className="city-name">city</h1>
      <div className="weather-list">
        <div className="day-weather">
          <h5 className="day-name hour-name">hour</h5>
          <p className="weather-logo">logo</p>
          <div>
            <p className="description">descr </p>
            <p>Temperature: &deg;C</p>
            <p>Wind: m/s</p>
            <p>Feels like: &deg;C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
