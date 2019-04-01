import React, { PureComponent } from "react";
import "./Achievements.css";

class Achievements extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "Prestaties");
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