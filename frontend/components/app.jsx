import React from "react";
import SignupContainer from "./session/signup_container";
import { Route } from "react-router-dom";
import NavBarContainer from './nav_bar/nav_bar_container'
import DashboardContainer from '../components/dashboard/dashboard_container';

// login before signup
export default () => (
  <div>
    <Route exact path="/" component={NavBarContainer} />
    <Route exact path="/signup" component={SignupContainer} />
    <Route exact path="/dashboard" component={DashboardContainer} />
  </div>
);
