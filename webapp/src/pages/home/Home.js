import React, { PureComponent } from "react";
import "./Home.css";
import profilePhoto from "../../images/profilePhoto.jpg";

class Home extends PureComponent {

    componentWillMount(){
        this.props.editHeader(true, "");
    }

    render() {  
        return (
            <main>
                <figure className={"profileInfo"}>
                    <img src={profilePhoto} alt={"profilePicture"} />
                    <figcaption className={"profileName"}>
                        <h1>Sam Koppens</h1>
                    </figcaption>
                </figure>
            </main>
        );
    }
}
export default Home;