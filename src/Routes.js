import React, { useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import OrderPage from "./Pages/OrderPage";
import ListPage from "./Pages/ListPage";
import AdminPage from "./Pages/AdminPage";
import LoginPAge from "./Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PrivateLogin from "./PrivateLogin";
import history from "./browserHistory";


const Routes = () => {
  
  const [state, setState]= useState({currentUser: localStorage.getItem("user")}) 
  const props = { path: "/admin", component: AdminPage };
  const orderProps={path:"/order", component: OrderPage};
  const listProps={path:"/list", component: ListPage}
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
        <PrivateRoute
          authenticated={state.currentUser ? true : false}
          ownProps={props}
        />
        <PrivateRoute
          authenticated={state.currentUser ? true : false}
          ownProps={orderProps}
        />
        <PrivateRoute
          authenticated={state.currentUser ? true : false}
          ownProps={listProps}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
