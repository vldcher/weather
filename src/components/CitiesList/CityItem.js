import React from "react";

function CityItem(props) {

    function onClick() {
        const { onSelect, city } = props;
        onSelect(city);
    };


    const { city, isSelected } = props;

    return (
        <li
            onClick={onClick}
            className={`list-item ${isSelected ? "is-selected" : ""}`}>
            {city.title}
        </li>
    );
}

export default CityItem;