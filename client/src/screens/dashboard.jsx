import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

export default function DashboardScreen() {
  return (
    <div>
      dashobard
      <Switch>
        <Route path="/admin">home</Route>
        <Route path="*">
          <Redirect to="/admin" />
        </Route>
      </Switch>
    </div>
  );
}
