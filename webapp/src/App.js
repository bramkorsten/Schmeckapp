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
    };
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

  render() {
    const { wallet, title, activeHamburger } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <Header
            wallet={wallet}
            title={title}
            schmeckleCount={570}
            setHamburgerActive={this.activateHamburger}
            active={activeHamburger}
          />
          <Overlay hamburgerFunction={this.activateHamburger} active={activeHamburger} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home editHeader={this.editHeader} />}
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
