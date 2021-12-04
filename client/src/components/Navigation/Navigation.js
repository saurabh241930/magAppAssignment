import Main from "../Main/Main";
import { Route, Switch } from "react-router-dom";
import React from "react";
import PassPropsToRouteComponents from "./PassPropsToRouteComponents";
import { useLocation } from "react-router-dom";

const Navigation = (props) => {

  return (
    <>
      <Switch>
        <Route
          exact
          from="/"
          render={(props) => {
            return (
              <Main childText="home" {...props} />
            );
          }}
        />
      </Switch>
    </>
  );
};

export default Navigation;
