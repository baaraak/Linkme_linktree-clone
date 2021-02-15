import React, { useState } from "react";

const auth = {};
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const login = React.useCallback(
    (form) => auth.login(form).then((user) => setUser(user)),
    [setUser]
  );
  const register = React.useCallback(
    (form) => auth.register(form).then((user) => setUser(user)),
    [setUser]
  );
  const logout = React.useCallback(() => {
    setUser(null);
  }, [setUser]);

  const value = React.useMemo(() => ({ user, login, logout, register }), [
    login,
    logout,
    register,
    user,
  ]);

  //   if (isLoading || isIdle) {
  //     return "Spinner";
  //   }

  //   if (isError) {
  //     return "Error";
  //   }

  //   if (isSuccess) {
  // }
  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
