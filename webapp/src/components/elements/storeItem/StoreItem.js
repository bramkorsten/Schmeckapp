import React, { PureComponent } from "react";
import "./StoreItem.css";
import schmeckle from "../../../images/schmeckle.svg";


class StoreItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        //put your state here
    };
  }

  //write functions here like this

  functionName = variables => {
    return variables;
  }

  render() {
    const {amount, title, image} = this.props;
    return (
        //return your html here
          <div className="store-card-wrap">
            <img className="card-wall-img" src={image} alt="" />
            <div className="card-content">
              <h3>{title}</h3>
              <div className="card-amount"><img src={schmeckle} alt="" /><span> {amount}</span>
              </div>
            </div>
          </div>
    );
  }
}

export default StoreItem;
