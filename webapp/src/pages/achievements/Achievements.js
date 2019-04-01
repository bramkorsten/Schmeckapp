import React, { PureComponent } from "react";
import "./Achievements.css";

class Achievements extends PureComponent {

    componentWillMount() {
        this.props.editHeader(false, "Prestaties");
    }

    render() {
        return (
            <main>
                <div className="parent-achievement">
                    <div className="achievement">

                    </div>
                    <div className="achievement">

                    </div>
                    <div className="achievement">

                    </div>
                    <div className="achievement">

                    </div>
                    <div className="achievement">

                    </div>
                </div>
            </main >
        );
    }
}
export default Achievements;