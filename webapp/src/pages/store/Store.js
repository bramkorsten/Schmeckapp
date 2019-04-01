import React, { PureComponent } from "react";
import "./Store.css";

class Store extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "Winkel");
    }

    render() {
        return (
            <main>
              <div className="store_cards-contain">
                <div className="store-card-wrap">

                </div>
              </div>
            </main>
        );
    }
}
export default Store;
