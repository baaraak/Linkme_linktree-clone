import React, { useEffect, useState } from "react";
import api from "../services/api";
import Spinner from "../components/spinner/Spinner";
import { removeStoredAuthToken, storeAuthToken } from "../services/token";

const auth = {};
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.auth.me().then((res) => {
      setUser(res.user);
      setLoading(false);
    });
  }, []);

  const login = React.useCallback((form) =>
    //   api.auth.login(form).then((results) => {
    //     const results = await api.auth.register(data);
    // console.log({ results });
    // if (results.token) {
    //   storeAuthToken(results.token);
    // }
    // if (results.errors) {
    //   setApiError(results.errors.message);
    // }
    // setLoading(false);
    //     setUser(user);
    //   }),
    [setUser]
  );
  const register = React.useCallback(
    (form) =>
      api.auth.register(form).then((results) => {
        if (results.errors) {
          return Promise.reject(results.errors[0].message);
        }
        if (results.token && results.user) {
          storeAuthToken(results.token);
          setUser(results.user);
        }
      }),
    [setUser]
  );
  const logout = React.useCallback(() => {
    removeStoredAuthToken();
    setUser(null);
  }, [setUser]);

  const value = React.useMemo(() => ({ user, login, logout, register }), [
    login,
    logout,
    register,
    user,
  ]);

  if (loading) {
    return <Spinner />;
  }
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
