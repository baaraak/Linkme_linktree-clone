import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MINIMUM_PREVIEW_WIDTH } from "../../services/constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Toolbar from "../../components/toolbar/Toolbar";

import "./dashboard.scss";

export default function DashboardScreen() {
  const { width } = useWindowDimensions();
  return (
    <div className="dashboard">
      <Header />
      <Toolbar />
      <Menu />

      <Switch>
        <Route path="/admin/settings">
          <div className="page">settings</div>
        </Route>
        <Route path="/admin/appearance">
          <div className="page">appearance</div>
        </Route>
        <Route path="/admin/pro">
          <div className="page">pro</div>
        </Route>
        <Route path="/admin">
          <div className="page">page</div>
        </Route>
      </Switch>
      {width > MINIMUM_PREVIEW_WIDTH && <div className="preview">preview</div>}
    </div>
  );
}
