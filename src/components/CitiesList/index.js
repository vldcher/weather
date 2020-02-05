import React from "react";
import "./CitiesList.css";
import CityItem from "./CityItem";

export default ({ cities, currentCity, onSelect }) => {
  return (
    <ul className="list">
      {cities.map(city => {
        return (
          <CityItem
            key={city.title}
            isSelected={currentCity.title === city.title}
            city={city}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  );
};
