import React, { PureComponent } from "react";
import "./Achievements.css";
import trophy from "../../images/trophy.png";

class Achievements extends PureComponent {

    componentWillMount() {
        this.props.editHeader(false, "Prestaties");
    }

    openoverlay = () => {
        document.getElementById("overlay-unlocked").style.height = "calc(100vh - 70px)";
    }

    closeoverlay = () => {
        document.getElementById("overlay-unlocked").style.height = "0%";
    }

    openoverlaylocked = () => {
        document.getElementById("overlay-locked").style.height = "calc(100vh - 70px)";
    }

    closeoverlaylocked = () => {
        document.getElementById("overlay-locked").style.height = "0%";
    }

    render() {
        const { achievements } = this.props;
        return (
            <main>
                <div className="page-title-trophy">
                    <p>Behaalde Prestaties</p>
                </div>

                <div className="trophy-container-wrapper">
                    <div className="trophy-container">
                        <div className="trophy" onClick={this.openoverlay}>
                            <div className="content">
                                <img class="trophy-image" alt="" src={trophy} />
                            </div>
                        </div>

                        <div className="trophy" onClick={this.openoverlay}>
                            <div className="content">
                                <img class="trophy-image" alt="" src={trophy} />
                            </div>
                        </div>

                        <div className="trophy" onClick={this.openoverlay}>
                            <div className="content">
                                <img class="trophy-image" alt="" src={trophy} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-title-trophy">
                    <p>Onbehaalde Prestaties</p>
                </div>

                <div className="trophy-container-wrapper">
                    <div className="trophy-container">

                        {achievements ?
                            //true
                            achievements.map(
                                //for each every achievement (child in achievements)
                                achievement => (
                                    <div className="trophy-locked" onClick={this.openoverlaylocked}>
                                        <div className="content">
                                            <img class="trophy-image" alt="" src={trophy} />
                                        </div>
                                    </div>
                                )
                            )
                            :
                            //false
                            console.log("wait a minute...")
                        }
                    </div>
                </div>

                <div id="overlay-unlocked">
                    <div className="trophy-header">
                        <span id="close" onClick={this.closeoverlay}>&#10005;</span>
                        <img className="trophy-image-header" alt="" src={trophy} />
                    </div>

                    <div id="content">
                        <div className="text">
                            <h1 className="trophy-heading">Prestatie</h1>
                            <p className="trophy-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div id="overlay-locked">
                    <div className="trophy-header-locked">
                        <span id="close" onClick={this.closeoverlaylocked}>&#10005;</span>
                        <img className="trophy-image-header" alt="" src={trophy} />
                    </div>

                    {achievements ?
                        //true
                        achievements.map(
                            //for each every achievement (child in achievements)
                            achievement => (
                                <div id="content">
                                    <div className="text">
                                        <h1 className="trophy-heading">{achievement.name}</h1>
                                        <p className="trophy-text">{achievement.description}</p>
                                    </div>
                                </div>
                            )
                        )
                        :
                        //false
                        console.log("wait a minute...")
                    }


                </div>

            </main >
        );
    }
}
export default Achievements;