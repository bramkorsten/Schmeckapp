import React, { PureComponent } from "react";
import "./Inspiration.css";

class Inspiration extends PureComponent {

    componentWillMount(){
        this.props.editHeader(false, "inspiratie");
    }

    render() {    
        return (
            <main>
                INSPIRATIE
            </main>
        );
    }
}
export default Inspiration;