import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Login/Login";

const routes = (
  <Router>
    <Switch>
      <Route path="/" render={() => <Dashboard />} exact />
      <Route path="/login" render={() => <Login />} />
    </Switch>
  </Router>
);

export default routes;
