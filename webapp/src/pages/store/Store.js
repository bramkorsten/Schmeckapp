import React, { PureComponent } from "react";
import "./Store.css";
import koffie from "../../images/koffie.jpg";
import taart from "../../images/taart.jpg";
import voetbaltafel from "../../images/voetbaltafel.jpg";
import schmeckle from "../../images/schmeckle.svg";

class Store extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "Winkel");
    }

    render() {
        return (
            <main>
              <div className="store_cards-contain">
                <div className="store-card-wrap">
                  <img className="card-wall-img" src={koffie} alt="" />
                  <div className="card-content">
                    <h3>Koffie</h3>
                    <div className="card-amount"><img src={schmeckle} alt="" /><span> 300</span></div>
                  </div>
                </div>

                <div className="store-card-wrap">
                  <img className="card-wall-img" src={taart} alt="" />
                </div>

                <div className="store-card-wrap">
                  <img className="card-wall-img" src={voetbaltafel} alt="" />
                </div>
              </div>
            </main>
        );
    }
}
export default Store;
