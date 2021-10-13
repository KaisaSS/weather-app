import { useState, useEffect } from "react";
import Weather from "./components/Weather/Weather";
import getWeatherService from "./services/getWeatherService";
import Spinner from "./Loader/Spinner";
import Sunny from "../src/weather_logos/sunny.png";
import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    searchWeatherForLocation("Oulu");
  }, []);

  const searchWeatherForLocation = (location) => {
    getWeatherService(location, (data) => {
      console.log(data);
      if (data.cod === "200") {
        setWeather(data);
      } else if (data.cod === "404") {
        isInvalidLocation();
      } else {
        console.log("Whoops! Error...");
      }
    });
  };

  const isInvalidLocation = () => {
    let searchfield = document.getElementById("searchfield");
    searchfield.classList.add("location-error");
    searchfield.placeholder = "Location not valid";
    setTimeout(() => {
      searchfield.classList.remove("location-error");
      searchfield.placeholder = "Enter city...";
    }, 4000);
  };

  const searchNewLocation = (location) => {
    if (location.length > 0) {
      // modify location
      searchWeatherForLocation(location);
      setSearchLocation("");
    } else {
      isInvalidLocation();
    }
  };

  return (
    <div>
      {/* <Spinner /> */}
      <nav className="navbar-container">
        <div className="logo">
          <img class="logo-img" src={Sunny} alt="logo" />
        </div>
        <div className="searchbox">
          <div>
            <label>Location: </label>
            <input
              className={"input-value"}
              id="searchfield"
              type="text"
              placeholder="Enter city..."
              value={searchLocation}
              onChange={(event) => setSearchLocation(event.target.value)}
            />
          </div>
          <div>
            <input
              className="search-button"
              type="button"
              value="Search"
              onClick={() => searchNewLocation(searchLocation)}
            ></input>
          </div>
        </div>
      </nav>
      {!weather ? <Spinner /> : <Weather weather={weather} />}
    </div>
  );
}

export default App;
