import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MINIMUM_PREVIEW_WIDTH } from 'services/constants';
import useWindowDimensions from 'hooks/useWindowDimensions';

import Header from 'components/header/Header';
import Menu from 'components/menu/Menu';
import Toolbar from 'components/toolbar/Toolbar';
import { SiteProvider } from 'context/site.context';

import './styles.scss';
import { useAuth } from 'context/auth.context';
import Spinner from 'components/spinner/Spinner';
import { Routes } from 'routes';
import Preview from 'components/preview/Preview';

const Links = React.lazy(() => import('./links'));
const Account = React.lazy(() => import('./account'));
const Appearance = React.lazy(() => import('./appearance'));

export default function DashboardScreen() {
  const { width } = useWindowDimensions();
  const { user, logout } = useAuth();

  // Un Authenticated users shouldn't see dashboard pages.
  if (!user) return <Redirect to={Routes.Signin} />;
  return (
    <div className="dashboard">
      <Header username={user.username} avatar={user.avatar} onLogout={logout} />
      <Toolbar username={user.username} />
      <Menu />
      <div className="page">
        <SiteProvider>
          <React.Suspense fallback={<Spinner />}>
            <Switch>
              <Route path={Routes.Account}>
                <Account />
              </Route>
              <Route path={Routes.Appearance}>
                <Appearance />
              </Route>
              <Route path={Routes.Pro}>pro</Route>
              <Route path={Routes.Dashboard}>
                <Links />
              </Route>
              <Route path="*">
                <Redirect to={Routes.Dashboard} />
              </Route>
            </Switch>
          </React.Suspense>
        </SiteProvider>
      </div>
      {width > MINIMUM_PREVIEW_WIDTH && <Preview username={user.username} />}
    </div>
  );
}
