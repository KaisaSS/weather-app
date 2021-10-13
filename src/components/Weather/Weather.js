import React, { useState, useEffect } from "react";
import filterData from "../../helpers/filterData";
import "./weather.css";

const Weather = ({ weather }) => {
  const [filteredByDay, setFilteredByDay] = useState([]);

  useEffect(() => {
    setFilteredByDay(filterData(weather));
  }, [weather]);

  return (
    <div className="weather-container">
      <h1 className="city-name">
        {weather.city.name}, {weather.city.country}
      </h1>

      <div className="weather-list">
        {filteredByDay.map((day, index) => {
          let time = index === 0 ? 0 : 4;
          const icon = day[time].weather[0].icon;

          return (
            <div className="day-weather">
              <h5 className="day-name">{day[time].dt_txt.split(" ")[0]}</h5>
              <img
                className="weather-logo"
                alt="weather-logo"
                src={`http://openweathermap.org/img/w/${icon}.png`}
              ></img>
              <div>
                <p className="description">{day[time].weather[0].description}</p>
                <p>Temperature: {Math.round(day[time].main.temp)} &deg;C</p>
                <p>Wind: {day[time].wind.speed} m/s</p>
                <p>Feels like: {Math.round(day[time].main.feels_like)} &deg;C</p>
              </div>
              <div className="btn-container">
                <input
                  type="button"
                  className="hourly-btn"
                  value="Details"
                  onClick={() => {
                    console.log("hello");
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
