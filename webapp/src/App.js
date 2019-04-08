import React, { PureComponent, Fragment } from "react";
import "./App.css";
import {
  Home,
  Inspiration,
  Rewards,
  Achievements,
  Store,
  NoMatch
} from "./pages";
import { Header, Footer } from "./components/globals";
import { Overlay } from "./components/modals";
import { SpinnerOverlay } from "./components/elements";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      wallet: true,
      title: "",
      activeHamburger: false,
      profile: {
        first_name: "",
        last_name: "",
        data: {
          schmeckels: 0
        }
      }
    };
  }

  componentDidMount() {
    this.apiUrl = "http://127.0.0.1:8000/api/";
    this.bearer = "qo5xIHw4EpczFTgYES1TcCAwb4c6pwIt6QaCb6jmNNobplyRqkWIU3R3btVV";
    this.fetchData();
    this.fetchAchievements();
  }

  activateHamburger = () => {
    this.state.activeHamburger
      ? this.setState({
          activeHamburger: false
        })
      : this.setState({
          activeHamburger: true
        });
  };

  editHeader = (wallet, title) => {
    this.setState({
      wallet: wallet,
      title: title
    });
  };

  fetchData = () => {
    this.showSpinner();
    fetch(this.apiUrl + "user", {
      method: "GET",
      headers: new Headers({
        'Accept': "application/json",
        'Authorization':
          "Bearer " + this.bearer,
        "Content-Type": "application/x-www-form-urlencoded"
      })
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            profile: result
          });
          console.log(result);
          this.hideSpinner();
        },
        error => {
          console.error(error);
        }
      );
  };

  fetchAchievements = () => {
    this.showSpinner();
    fetch(this.apiUrl + "achievements", {
      method: "GET",
      headers: new Headers({
        'Accept': "application/json",
        'Authorization':
          "Bearer " + this.bearer,
        "Content-Type": "application/x-www-form-urlencoded"
      })
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            achievements: result
          });
          console.log(result);
          this.hideSpinner();
        },
        error => {
          console.error(error);
        }
      );
  };

  hideSpinner = () => {
    document.querySelector('.loading-spinner-contain').classList.add('spinner-hidden');
    setTimeout(function() {
      document.querySelector('.loading-spinner-contain').classList.add('spinner-gone');
    },300);
  }

  showSpinner = () => {
    document.querySelector('.loading-spinner-contain').classList.remove('spinner-gone');
    setTimeout(function() {
      document.querySelector('.loading-spinner-contain').classList.remove('spinner-hidden');
    },10)
  }

  render() {
    const { wallet, title, activeHamburger, profile, achievements } = this.state;
    console.log(profile);

    return (
      <BrowserRouter>
        <Fragment>
          <Header
            wallet={wallet}
            title={title}
            schmeckleCount={profile.data.schmeckels}
            setHamburgerActive={this.activateHamburger}
            active={activeHamburger}
          />
          <Overlay
            hamburgerFunction={this.activateHamburger}
            active={activeHamburger}
          />
          <SpinnerOverlay />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home profile={profile} editHeader={this.editHeader} />}
            />
            <Route
              exact
              path="/beloningen"
              render={() => <Rewards editHeader={this.editHeader} />}
            />
            <Route
              exact
              path="/winkel"
              render={() => <Store editHeader={this.editHeader} />}
            />
            <Route
              exact
              path="/prestaties"
              render={() => <Achievements achievements={achievements} editHeader={this.editHeader} />}
            />
            <Route
              exact
              path="/inspiratie"
              render={() => <Inspiration editHeader={this.editHeader} />}
            />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
