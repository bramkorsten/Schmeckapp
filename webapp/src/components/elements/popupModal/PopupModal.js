import React, { PureComponent } from "react";
import "./PopupModal.css";

class PopupModal extends PureComponent {

  createModal = () => {
    return (
      <div>
        <div className="popup-modal-wall wall-hidden">
        </div>
        <div className="popup-modal-contain modal-hidden">
          <div className="popup-modal-wrap">
          <button onClick={this.confirmBuy}>Saff</button>
          <button onClick={this.cancelBuy}>Fakka</button>
          </div>
        </div>
      </div>
    );


  }
}

export default PopupModal;
