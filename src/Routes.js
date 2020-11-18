import React, { useContext } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { AppContext } from "./context/AppProvider";
import LandingPage from "./Pages/LandingPage";
import OrderPage from "./Pages/OrderPage";
import ListPage from "./Pages/ListPage";
import AdminPage from "./Pages/AdminPage";
import LoginPAge from "./Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PrivateLogin from "./PrivateLogin";

import history from "./browserHistory";

const Routes = () => {
  const { state } = useContext(AppContext);
  console.log("this is state", state);
  const props = { path: "/admin", component: AdminPage };

  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route path="/home" component={LandingPage} />

        <PrivateLogin
          exact
          path="/login"
          component={LoginPAge}
          authenticated={state.currentUser ? true : false}
        />

        <Route path="/order" component={OrderPage} />

        <Route path="/list" component={ListPage} />

        <PrivateRoute
          authenticated={state.currentUser ? true : false}
          ownProps={props}
        />

        <Route component={<h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  );
};

export default Routes;
