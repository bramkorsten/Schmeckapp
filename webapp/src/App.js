import React, { PureComponent, Fragment } from "react";
import "./App.css";
import { Home, NoMatch } from "./pages";
import { Header, Footer } from "./components/globals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
