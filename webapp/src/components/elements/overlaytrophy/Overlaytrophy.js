import React, { PureComponent } from "react";
import "./Overlaytrophy.css";
import trophy from "../../../images/trophy.png";

class Overlaytrophy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  componentDidUpdate() {
    this.checkIfActive();
  }

  checkIfActive = () => {
    const { active } = this.props;
    if(active){
      this.openOverlay()
    }else{
      this.closeoverlay()
    }
  }

  closeoverlay = () => {
    document.getElementById("overlay-unlocked").style.height = "0%";
  }

  openOverlay = () => {
    document.getElementById("overlay-unlocked").style.height = "calc(100vh - 70px)";
  }

  render() {
    const { achievement, closeModal } = this.props;
    return (
      <div id="overlay-unlocked">
      <div className="trophy-header">
          <span id="close" onClick={closeModal}>&#10005;</span>
          <img className="trophy-image-header" alt="" src={trophy} />
      </div>

      <div id="content">
          <div className="text">
              <h1 className="trophy-heading">{achievement && achievement.name}</h1>
              <p className="trophy-text">{achievement && achievement.description}</p>
          </div>
      </div>
      </div>
    );
  }
}

export default Overlaytrophy;
