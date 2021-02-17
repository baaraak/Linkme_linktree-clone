import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MINIMUM_PREVIEW_WIDTH } from "../../services/constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./dashboard.scss";

export default function DashboardScreen() {
  const { width } = useWindowDimensions();
  return (
    <div className="dashboard">
      <header>header</header>
      <div className="menu">menu</div>
      <div className="toolbar">toolbar</div>

      <Switch>
        <Route path="/admin">
          <div className="page">page</div>
        </Route>
        <Route path="*">
          <Redirect to="/admin" />
        </Route>
      </Switch>
      {width > MINIMUM_PREVIEW_WIDTH && <div className="preview">preview</div>}
    </div>
  );
}
