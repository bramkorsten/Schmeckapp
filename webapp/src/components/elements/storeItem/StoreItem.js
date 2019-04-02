import React, { PureComponent } from "react";
import "./StoreItem.css";
import schmeckle from "../../../images/schmeckle.svg";
import { PopupModal } from '../';


class StoreItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        //put your state here
    };
  }

  render() {
    const {amount, title, image, itemId} = this.props;
    return (
        //return your html here
          <div className="store-card-wrap" data-item-id={itemId} onClick={this.openModal}>
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
