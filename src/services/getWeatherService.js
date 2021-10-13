import { API_KEY } from "../config";

const getWeatherService = (location, callBack) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => callBack(data))
    .catch((error) => console.log("Whoopppii, error!", error));
};

export default getWeatherService;
