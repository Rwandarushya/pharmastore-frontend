import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import OrderPage from "./Pages/OrderPage";
import ListPage from './Pages/ListPage'
import LoginPage from './Pages/LoginPage'
import AdminPage from "./Pages/AdminPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={LandingPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/list" component={ListPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
