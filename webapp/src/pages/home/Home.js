import React, { PureComponent } from "react";
import "./Home.css";
import profilePhoto from "../../images/profilePhoto.jpg";
import { Link } from "react-router-dom";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        //put your state here
    };
  }

  componentWillMount() {
    this.props.editHeader(true, "");
  }

  componentDidMount() {
    const { apiUrl } = this.props;
    fetch(apiUrl + "user", {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization': 'Bearer oqV7Ztrrl97Q4mVRNeJE3I3AUNmQJ1eYliokLEbAj2AjfkGqoATiymTd8sUL',
        'Content-Type': 'application/x-www-form-urlencoded'
     }),
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            name: result.first_name + ' ' + result.last_name,
          });
          console.log(result);
        },
        (error) => {
          console.error(error);
        }
      )
  }

  render() {
    const { name } = this.state;
    return (
      <main>
        <figure className={"profileInfo"}>
          <img src={profilePhoto} alt={"profilePicture"} />
          <figcaption className={"profileName"}>
            <h1>{name}</h1>
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
