import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import OrderPage from "./Pages/OrderPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={LandingPage} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
