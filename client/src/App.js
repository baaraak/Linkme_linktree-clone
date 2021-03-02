import React from "react";
import { useAuth } from "./context/auth.context";
import Spinner from "./components/spinner/Spinner";

const DashboardScreen = React.lazy(() =>
  import("./screens/dashboard/Dashboard")
);
const AuthScreen = React.lazy(() => import("./screens/auth"));

function App() {
  const { user } = useAuth();
  return (
    <React.Suspense fallback={<Spinner />}>
      {user ? <DashboardScreen /> : <AuthScreen />}
    </React.Suspense>
  );
}

export default App;
