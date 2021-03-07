import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MINIMUM_PREVIEW_WIDTH } from "../../services/constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Toolbar from "../../components/toolbar/Toolbar";
import { SiteProvider } from "../../context/site.context";

import "./dashboard.scss";
import { useAuth } from "../../context/auth.context";
import Spinner from "../../components/spinner/Spinner";

const Links = React.lazy(() => import("../links/Links"));
const Settings = React.lazy(() => import("../settings/Settings"));
const Appearance = React.lazy(() => import("../appearance/Appearance"));

export default function DashboardScreen() {
  const { width } = useWindowDimensions();
  const { user } = useAuth();

  // Un Authenticated users shouldn't see dashboard pages.
  if (!user) return <Redirect to="/auth/signin" />;
  return (
    <div className="dashboard">
      <Header />
      <Toolbar />
      <Menu />
      <div className="page">
        <SiteProvider>
          <React.Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/admin/settings">
                <Settings />
              </Route>
              <Route path="/admin/appearance">
                <Appearance />
              </Route>
              <Route path="/admin/pro">pro</Route>
              <Route path="/admin">
                <Links />
              </Route>
              <Route path="*">
                <Redirect to="/admin" />
              </Route>
            </Switch>
          </React.Suspense>
        </SiteProvider>
      </div>
      {width > MINIMUM_PREVIEW_WIDTH && <div className="preview">preview</div>}
    </div>
  );
}
