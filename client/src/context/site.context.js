import React, { useCallback, useEffect, useMemo, useState } from 'react';
import api from '../services/api';
import Spinner from '../components/spinner/Spinner';
import { useAuth } from './auth.context';

import { toaster } from 'evergreen-ui';

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
      toaster.danger(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserSite();
  }, []);

  const update = useCallback(
    async (fields) => {
      const { site } = await api.site.update(fields);
      setData(site);
    },
    [setData],
  );

  const updateLinks = useCallback(
    (links) => {
      setData((d) => ({ ...d, links }));
    },
    [setData],
  );

  const value = useMemo(() => ({ data, updateLinks, update }), [
    data,
    updateLinks,
    update,
  ]);

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
