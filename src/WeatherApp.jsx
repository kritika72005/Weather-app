import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 37.05,
    humidity: 84,
    temp: 30.05,
    tempMax: 30.05,
    tempMin: 30.05,
    weather: "mist",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
