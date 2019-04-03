import React, { PureComponent } from "react";
import "./StoreItem.css";
import schmeckle from "../../../images/schmeckle.svg";

class StoreItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const { amount, title, image, itemId, onClickFunc } = this.props;
    return (
      <div
        className="store-card-wrap"
        data-item-id={itemId}
        onClick={onClickFunc}
      >
        <img className="card-wall-img" src={image} alt="" />
        <div className="card-content">
          <h3>{title}</h3>
          {amount && (
            <div className="card-amount">
              <img src={schmeckle} alt="" />
              <span> {amount}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StoreItem;
