import React, { useEffect, useState } from "react";
import api from "../services/api";
import Spinner from "../components/spinner/Spinner";
import {
  getStoredAuthToken,
  removeStoredAuthToken,
  storeAuthToken,
} from "../services/token";

const auth = {};
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const initializeUser = async () => {
    try {
      const token = getStoredAuthToken();
      if (token) {
        const { user } = await api.auth.me();
        setUser(user);
      }
    } catch (err) {
      // token not valid, should check for refresh token
      removeStoredAuthToken();
    }
    setLoading(false);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const login = React.useCallback(
    async (form) => {
      const { token, user } = await api.auth.login(form);
      storeAuthToken(token);
      setUser(user);
    },
    [setUser]
  );

  const register = React.useCallback(
    async (form) => {
      const { token, user } = await api.auth.register(form);
      storeAuthToken(token);
      setUser(user);
    },
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
