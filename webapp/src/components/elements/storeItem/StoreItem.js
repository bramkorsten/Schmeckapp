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

  itemMenu = () => {
    alert(this.props.itemId);
  };

  render() {
    const { amount, title, image, itemId } = this.props;
    return (
      //return your html here
      <div
        className="store-card-wrap"
        data-item-id={itemId}
        onClick={this.itemMenu}
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
