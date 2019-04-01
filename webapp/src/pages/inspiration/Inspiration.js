import React, { PureComponent } from "react";
import "./Inspiration.css";
import laptopman from "../../images/laptopman.png";
import laptopman2 from "../../images/laptopman2.png";
import ober from "../../images/ober.png";

class Inspiration extends PureComponent {

    componentWillMount() {
        this.props.editHeader(false, "Inspiratie");
    }

    openoverlay = () => {
        document.getElementById("overlay").style.height = "100%";
    }

    closeoverlay = () => {
        document.getElementById("overlay").style.height = "0%";
    }

    render() {
        return (
            <main>
                <div class="title">
                    <h1>Inspiratiepagina</h1>
                </div>

                <div class="container">
                    <div class="person-parent">
                        <div id="person" onClick={this.openoverlay}>
                            <div class="person-info">
                                <h2 class="whiteh2">Henry Hendrickson</h2>
                                <p class="widthp">Lorem ipsum dolor sit amet, consectetur </p>
                            </div>
                            <div class="person-info-image">
                                <img class="person-info-image-src" alt="" src={laptopman2} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="person-parent">
                        <div id="person" onClick={this.openoverlay}>
                            <div class="person-info">
                                <h2 class="whiteh2">Frits van der Peersen</h2>
                                <p class="widthp">Lorem ipsum dolor sit amet, consectetur </p>
                            </div>
                            <div class="person-info-image">
                                <img class="person-info-image-src" alt="" src={ober} />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="overlay">
                    <div class="person-header">
                        <span id="close" onClick={this.closeoverlay}>&#10005;</span>
                        <img class="person-image" alt="" src={laptopman} />
                    </div>

                    <div id="content">
                        <div class="text">
                            <h1 class="person-heading">Henry Hendrickson</h1>
                            <p class="person-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>

            </main>
                    );
                }
            }
export default Inspiration;
