import React, { PureComponent } from "react";
import "./SpinnerOverlay.css";
import schmeckle from "../../../images/schmeckle.svg";

class SpinnerOverlay extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <div className="loading-spinner-contain">
          <div className="loading-spinner-wrap">
            <img src={schmeckle} alt="schmeckle loader" />
          </div>
        </div>
    );
  }
}

export default SpinnerOverlay;
