import React, { useState } from "react";
import app from "../../base";
import FrontSide from "../FrontSide";
import BackSide from "../BackSide/BackSide";
import cities from "../../cities.json";

import "./Pannel.css";

export const Pannel = () => {

  const [flipped, setFliped] =  useState(false);
  const [currentCity, setCurrentCity] =  useState(cities[0]);

  return (
    <>
      <div className="pannel__wrapper">
        <div className={`panel ${flipped ? 'flip' : ''} `}>
          <div className="panel-front">
            <FrontSide
              onClick={() => setFliped( !flipped )}
              currentCity={currentCity} />
          </div>
          <div className="panel-back">
            <BackSide
              cities={cities}
              onClick={() => setFliped( !flipped )}
              currentCity={currentCity}
              onSelect={( city ) => setCurrentCity( city )} />
          </div>
        </div>

        <button className="signout__button" onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
    </>
  )
}


export default Pannel;
