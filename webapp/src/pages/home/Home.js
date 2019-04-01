import React, { PureComponent } from "react";
import "./Home.css";
import profilePhoto from "../../images/profilePhoto.jpg";

class Home extends PureComponent {
  componentWillMount() {
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

        <div className={"levelContainer"}>
          <h4>Level 5</h4>
          <div className={"progressbar-outer"}>
            <div className={"progressbar-inner"} />
          </div>
          <p className={"xpCounter"}>2070/3850 xp</p>
        </div>

        <section className={"rewardsContainer"}>
          <h2>Beloningen</h2>
        </section>

        <section className={"achievementsContainer"}>
          <h2>Prestaties</h2>
        </section>
      </main>
    );
  }
}

export default Home;
