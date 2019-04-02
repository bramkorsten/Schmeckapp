import React, { PureComponent } from "react";
import "./Home.css";
import profilePhoto from "../../images/profilePhoto.jpg";
import taart from "../../images/taart.jpg";
import voetbaltafel from "../../images/voetbaltafel.jpg";
import koffie from "../../images/koffie.jpg";
import { Badge } from "../../components/elements";
import { Link } from "react-router-dom";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.editHeader(true, "");
  }

  render() {
    const { profile } = this.props;
    const name = profile.first_name + " " + profile.last_name;

    return (
      <main>
        <figure className={"profileInfo"}>
          <img src={profilePhoto} alt={"profilePicture"} />
          <figcaption className={"profileName"}>
            <h1>{name}</h1>
          </figcaption>
        </figure>

        <div className={"levelContainer"}>
          <h4>Level {profile.data.level}</h4>
          <div className={"progressbar-outer"}>
            <div className={"progressbar-inner"} />{" "}
          </div>
          <p className={"xpCounter"}>{profile.data.xp} xp</p>
        </div>

        <section className={"rewardsContainer"}>
          <div className={"rewardsContainerHeader"}>
            <h2>Beloningen</h2>
            <Link to={"/beloningen"}>
              <h2 className={"rewardsLink"}>Alle</h2>
            </Link>
          </div>
          <div className={"badges"}>
            <Badge badgeImage={taart} title={"Taart"} />
            <Badge badgeImage={voetbaltafel} title={"Voetbaltafel"} />
            <Badge badgeImage={koffie} title={"Koffie"} />
          </div>
        </section>

        <section className={"achievementsContainer"}>
          <div className={"rewardsContainerHeader"}>
            <h2>Prestaties</h2>
            <Link to={"/prestaties"}>
              <h2 className={"rewardsLink"}>Alle</h2>
            </Link>
          </div>
          <div className={"badges"}>
            <Badge badgeImage={profilePhoto} title={"Prestatie"} />
            <Badge badgeImage={profilePhoto} title={"Prestatie"} />
            <Badge badgeImage={profilePhoto} title={"Prestatie"} />
            <Badge badgeImage={profilePhoto} title={"Prestatie"} />
            <Badge badgeImage={profilePhoto} title={"Prestatie"} />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
