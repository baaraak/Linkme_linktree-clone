import React, { useEffect, useState } from "react";
import api from "../services/api";
import Spinner from "../components/spinner/Spinner";
import { useAuth } from "./auth.context";
import {
  getStoredAuthToken,
  removeStoredAuthToken,
  storeAuthToken,
} from "../services/token";
import { toaster } from "evergreen-ui";

const AuthContext = React.createContext();

function SiteProvider(props) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const getUserSite = async () => {
    try {
      const { site } = await api.site.get(user.site);
      setData(site);
    } catch (err) {
      console.log("***********************");
      console.log(err);
      console.log("***********************");
      toaster.danger(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserSite();
  }, []);

  const login = React.useCallback(
    async (form) => {
      const { token, user } = await api.auth.login(form);
      storeAuthToken(token);
      setData(user);
    },
    [setData]
  );

  const create = React.useCallback(async () => {
    const { link } = await api.link.create();
    setData((l) => l.concat(link));
  }, [setData]);

  const logout = React.useCallback(() => {
    removeStoredAuthToken();
    setData(null);
  }, [setData]);

  const value = React.useMemo(() => ({ data, create }), [data, create]);

  if (loading) {
    return <Spinner />;
  }
  return <AuthContext.Provider value={value} {...props} />;
}

function useSite() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useSite must be used within a SiteProvider`);
  }
  return context;
}

export { SiteProvider, useSite };