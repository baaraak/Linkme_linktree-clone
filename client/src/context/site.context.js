import React, { useEffect, useState } from "react";
import api from "../services/api";
import Spinner from "../components/spinner/Spinner";

const SiteContext = React.createContext();

function SiteProvider(props) {
  const [site, setSite] = useState();

  // const login = React.useCallback(
  //   async (form) => {
  //     const { token, user } = await api.auth.login(form);
  //     storeSiteToken(token);
  //     setUser(user);
  //   },
  //   [setUser]
  // );

  // const value = React.useMemo(() => ({ user, login, logout, register }), [
  //   login,
  //   logout,
  //   register,
  //   user,
  // ]);

  // if (loading) {
  //   return <Spinner />;
  // }
  return <SiteContext.Provider value={{}} {...props} />;
}

function useSite() {
  const context = React.useContext(SiteContext);
  if (context === undefined) {
    throw new Error(`useSite must be used within a SiteProvider`);
  }
  return context;
}

export { SiteProvider, useSite };
