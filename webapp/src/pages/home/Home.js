import React, { PureComponent } from "react";
import "./Home.css";
import profilePhoto from "../../images/profilePhoto.jpg";
import { Link } from "react-router-dom";

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
            <div className={"progressbar-inner"} />{" "}
          </div>
          <p className={"xpCounter"}>2070/3850 xp</p>
        </div>

        <section className={"rewardsContainer"}>
          <div className={"rewardsContainerHeader"}>
            <h2>Beloningen</h2>
            <Link to={"/beloningen"}>
              <h2 className={"rewardsLink"}>Alle</h2>
            </Link>
          </div>
          <div className={"rewards"}>
          
          </div>
        </section>

        <section className={"achievementsContainer"}>
          <div className={"rewardsContainerHeader"}>
            <h2>Prestaties</h2>
            <Link to={"/prestaties"}>
              <h2 className={"rewardsLink"}>Alle</h2>
            </Link>
          </div>
          <div className={"rewards"}>

          </div>
        </section>
      </main>
    );
  }
}

export default Home;
