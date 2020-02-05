import React from "react";
import CitiesList from '../CitiesList';
import "./BackSide.css";

export default ({ cities, onClick, currentCity, onSelect }) => {
    // TODO: rewrite on hooks

    return (
        <div className="card-back">
            <CitiesList
                cities={cities}
                currentCity={currentCity}
                onSelect={onSelect}
            />
            <button className="backside__button" onClick={onClick}>Flip back</button>
        </div>
    );
};