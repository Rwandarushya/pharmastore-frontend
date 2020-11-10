import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from './browserHistory';

//import pages

import LandingPage from './Pages/LandingPage'
import OrderPage from './Pages/OrderPage'


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/order" component={OrderPage} />
        </Switch>
    </Router>
  );
};

export default Routes;