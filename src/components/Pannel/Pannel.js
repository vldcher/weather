import React from "react";
import app from "../../base";
import FrontSide from "../FrontSide";
import BackSide from "../BackSide/BackSide";
import cities from "../../cities.json";


import "./Pannel.css";

class Pannel extends React.Component {


  state = {
    flipped: false,
    currentCity: cities[0]
  };

  onFlip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  onSelectCity = city => {
    this.setState({ currentCity: city });
  };


  render() {
    return (
      <>
        <div className="pannel__wrapper">
          <div className={`panel ${this.state.flipped ? 'flip' : ''} `}>
            <div className="panel-front">
              <FrontSide
                onClick={this.onFlip}
                currentCity={this.state.currentCity} />
            </div>
            <div className="panel-back">
              <BackSide
                cities={cities}
                onClick={this.onFlip}
                currentCity={this.state.currentCity}
                onSelect={this.onSelectCity} />
            </div>
          </div>

          <button className="signout__button" onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
      </>
    )
  }
}


export default Pannel;
