import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import api from "../services/api";
import Spinner from "../components/spinner/Spinner";
import {
  getStoredAuthToken,
  removeStoredAuthToken,
  storeAuthToken,
} from "../services/token";

const AuthContext = createContext();

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

  const login = useCallback(
    async (form) => {
      const { token, user } = await api.auth.login(form);
      storeAuthToken(token);
      setUser(user);
    },
    [setUser]
  );

  const register = useCallback(
    async (form) => {
      const { token, user } = await api.auth.register(form);
      storeAuthToken(token);
      setUser(user);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    removeStoredAuthToken();
    setUser(null);
  }, [setUser]);

  const value = useMemo(() => ({ user, login, logout, register }), [
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
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
