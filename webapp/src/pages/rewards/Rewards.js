import React, { PureComponent } from "react";
import { StoreItem } from "../../components/elements";
import "./Rewards.css";
import koffie from "../../images/koffie.jpg";
import taart from "../../images/taart.jpg";
import voetbaltafel from "../../images/voetbaltafel.jpg";

class Rewards extends PureComponent {

    componentWillMount() {
        this.props.editHeader(false, "Beloningen");
    }

    render() {
        return (
            <main>
                <div className="store_cards-contain">
                    <StoreItem image={koffie} title="Koffie" itemId="koffie"/>
                    <StoreItem image={taart} title="Taart" itemId="taart"/>
                    <StoreItem image={voetbaltafel} title="Voetbaltafel" itemId="voetbaltafel"/>
                </div>
            </main>
        );
    }
}
export default Rewards;