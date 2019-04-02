import React, { PureComponent } from "react";
import "./Badge.css";

class Badge extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { badgeImage, title } = this.props;
    return (
      <div className={"badgeContainer"}>
        <div className={"badgeImageContainer"}>
          <img src={badgeImage} alt={"badge"} />
        </div>
        <span className={"badgeTitle"}>{title}</span>
      </div>
    );
  }
}

export default Badge;
