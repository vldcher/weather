import React from "react";
import app from "../../base";
import FrontSide from "../FrontSide";

import "./Pannel.css";


const Home = () => {
  return (
    <>
      <div className="pannel__wrapper">
        <div className="panel">
          <div className="panel-front">
          <FrontSide/>
          </div>
          <div className="panel-back">Panel Back</div>
        </div>

        <button className="signout__button" onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
    </>
  );
};

export default Home;
