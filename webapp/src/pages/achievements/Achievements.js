import React, { PureComponent } from "react";
import "./Achievements.css";

class Achievements extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "prestaties");
    }

    render() {    
        return (
            <main>
                PRESTATIES
            </main>
        );
    }
}
export default Achievements;