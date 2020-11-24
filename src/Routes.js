import { Router, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import OrderPage from "./Pages/OrderPage";
import ListPage from "./Pages/ListPage";
import AdminPage from "./Pages/AdminPage";
import LoginPAge from "./Pages/LoginPage";

import history from "./browserHistory";

const Routes = () => {


  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route path="/home" component={LandingPage} />

        <Route path="/admin" component={AdminPage}/>

        <Route path="/order" component={OrderPage} />

        <Route path="/list" component={ListPage} />

        <Route path='/login' component={LoginPAge}/>

        <Route component={<h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  );
};

export default Routes;
