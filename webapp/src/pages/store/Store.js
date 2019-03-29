import React, { PureComponent } from "react";
import "./Store.css";

class Store extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "winkel");
    }

    render() {    
        return (
            <main>
                WINKEL
            </main>
        );
    }
}
export default Store;