import React from "react";
import { useAuth } from "./context/auth.context";
import Spinner from "./components/spinner/Spinner";
import { Route, Switch } from "react-router-dom";

const DashboardScreen = React.lazy(() =>
  import("./screens/dashboard/dashboard")
);
const AuthScreen = React.lazy(() => import("./screens/auth"));

function App() {
  const { user } = useAuth();
  return (
    <React.Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" exact>
          homepage
        </Route>
        <Route path="/admin">
          <DashboardScreen />
        </Route>
        <Route path="/auth">
          <AuthScreen />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </React.Suspense>
  );
}
export default App;
