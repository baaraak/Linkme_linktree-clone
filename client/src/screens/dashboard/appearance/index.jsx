import React from 'react';
import Profile from './Profile';
import Background from './Background';
import Buttons from './Buttons';
import { useAuth } from 'context/auth.context';
import { useSite } from 'context/site.context';

export default function Appearance() {
  const { user, update } = useAuth();
  const { data: site, update: updateSite } = useSite();
  return (
    <div className="appearance page__container">
      <Profile
        username={user.username}
        onChange={update}
        avatar={user.avatar}
        title={user.title}
        bio={user.bio}
      />
      <Background background={site.background} onChange={updateSite} />
      <Buttons />
      {/* <Themes />
      {/* <Fonts />*/}
    </div>
  );
}
