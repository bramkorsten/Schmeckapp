import React, { PureComponent } from "react";
import "./Home.css";

class Home extends PureComponent {

    componentWillMount(){
        this.props.editHeader(true, "");
    }

    render() {  
        return (
            <main>
                HOME
            </main>
        );
    }
}
export default Home;