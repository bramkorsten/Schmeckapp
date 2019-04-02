import React, { PureComponent } from "react";
import "./overlaytrophy.css";

class Overlaytrophy extends PureComponent {
  render() {
    return (
      <div id="overlay-unlocked">
      <div className="trophy-header">
          <span id="close" onClick={this.closeoverlay}>&#10005;</span>
          <img className="trophy-image-header" alt="" src={trophy} />
      </div>

      <div id="content">
          <div className="text">
              <h1 className="trophy-heading">{achievement.name}</h1>
              <p className="trophy-text">{achievement.description}</p>
          </div>
      </div>
    );
  }
}

export default Overlaytrophy;
