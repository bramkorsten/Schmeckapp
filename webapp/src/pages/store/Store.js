import React, { PureComponent } from "react";
import { StoreItem } from "../../components/elements";
import "./Store.css";
import koffie from "../../images/koffie.jpg";
import taart from "../../images/taart.jpg";
import voetbaltafel from "../../images/voetbaltafel.jpg";

class Store extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "Winkel");
    }

    render() {
        return (
            <main>
              <div className="store_cards-contain">
              <StoreItem image={koffie} title="Koffie" amount="300" />
              <StoreItem image={taart} title="Taart" amount="300" />
              <StoreItem image={voetbaltafel} title="Voetbaltafel" amount="150.000" />
              </div>
            </main>
        );
    }
}
export default Store;
