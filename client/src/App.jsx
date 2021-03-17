import React from "react";
import { useAuth } from "./context/auth.context";
import Spinner from "components/spinner/Spinner";
import { Route, Switch } from "react-router-dom";
import { Routes } from "./routes";
import { Heading, Link } from "evergreen-ui";

const DashboardScreen = React.lazy(() => import("./screens/dashboard"));
const AuthScreen = React.lazy(() => import("./screens/auth"));
const HomeScreen = React.lazy(() => import("./screens/home"));

function App() {
  const { user } = useAuth();

  return (
    <React.Suspense fallback={<Spinner />}>
      <Switch>
        <Route path={Routes.Home} exact>
          <HomeScreen />
        </Route>
        <Route path={Routes.Dashboard}>
          <DashboardScreen />
        </Route>
        <Route path={Routes.Auth}>
          <AuthScreen />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </React.Suspense>
  );
}
export default App;
