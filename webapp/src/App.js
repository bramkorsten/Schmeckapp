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
    this.fetchData();
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
    const apiUrl = "http://127.0.0.1:8000/api/";
    fetch(apiUrl + "user", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        Authorization:
          "Bearer qo5xIHw4EpczFTgYES1TcCAwb4c6pwIt6QaCb6jmNNobplyRqkWIU3R3btVV",
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
        },
        error => {
          console.error(error);
        }
      );
  };

  render() {
    const { wallet, title, activeHamburger, profile } = this.state;

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
              render={() => <Achievements editHeader={this.editHeader} />}
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
