import React, { useState, useEffect } from "react";
import FrontSideView from "./FrontSideView";
import moment from "moment";
import { getWeatherForLocation } from "../../api";

function FrontSide(props) {

  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    getWeatherForLocation(props.currentCity).then(weather => {
      setCurrentWeather(weather.currently);
    });
  }, [props.currentCity]);


  if (!currentWeather) {
    return `Loading`;
  }

  const {
    icon,
    temperature,
    apparentTemperature,
    summary
  } = currentWeather;
  return (
    
    <FrontSideView
      date={moment()}
      icon={icon}
      temperature={temperature}
      apparentTemperature={apparentTemperature}
      summary={summary}
      currentCityName={props.currentCity.title}
      onClick={props.onClick}
    />
  )
}

export default FrontSide;