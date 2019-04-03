import React, { PureComponent } from "react";
import "./Rewards.css";
import taart from "../../images/taart.jpg";
import { StoreItem, Button } from "../../components/elements";

class Rewards extends PureComponent {

    componentWillMount() {
        this.props.editHeader(false, "Beloningen");
    }

    render() {
        return (
            <main>
                <div className={"rewardsViewer"}>
                    <StoreItem title={"Taart"} image={taart}/>
                    <StoreItem title={"Taart"} image={taart}/>
                    <StoreItem title={"Taart"} image={taart}/>
                    <StoreItem title={"Taart"} image={taart}/>
                    <StoreItem title={"Taart"} image={taart}/>
                    <StoreItem title={"Taart"} image={taart}/>
                </div>
            </main>
        );
    }
}
export default Rewards;