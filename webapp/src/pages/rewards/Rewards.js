import React, { PureComponent } from "react";
import "./Rewards.css";

class Rewards extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "Beloningen");
    }

    render() {    
        return (
            <main>
                BELONINGEN
            </main>
        );
    }
}
export default Rewards;