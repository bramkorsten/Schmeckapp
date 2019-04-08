import React, { PureComponent } from "react";
import "./Achievements.css";
import trophy from "../../images/trophy.png";
import { Overlaytrophy } from "../../components/elements";

class Achievements extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

    componentWillMount() {
        this.props.editHeader(false, "Prestaties");
    }

    openModal = event => {
        const index = event.target.parentNode.id;
        this.setState({
            number: index,
            active: true
        })
    }

    closeModal = () => {
        this.setState({
            active: false
        })
    }

    render() {
        const { achievements } = this.props;
        const { number, active } = this.state;
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
                                (achievement, index) => (
                                    <div className="trophy-locked" onClick={this.openModal}>
                                        <div id={index} className="content">
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

                {/* <div id="overlay-unlocked">
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
                </div> */}

                {/* <div id="overlay-locked">
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


                </div> */}

                <Overlaytrophy closeModal={this.closeModal} active={active} achievement={achievements && achievements[number]} />

            </main >
        );
    }
}
export default Achievements;