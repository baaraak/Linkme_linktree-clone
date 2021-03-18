import Avatar from 'components/avatar/Avatar';
import { Heading, Strong, Text } from 'evergreen-ui';
import React, { useMemo } from 'react';
import { BACKGROUNDS } from 'screens/dashboard/appearance/Background';
import './styles.scss';

const Site = ({ site }) => {
  const backgroundUrl = useMemo(() => {
    return BACKGROUNDS.find((b) => b.id === site.background).url;
  }, [site.background]);
  return (
    <div className="site" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="site__header">
        <Avatar size={100} src={site.user.avatar} />
        <div className="title">
          <Heading size={700} color="black">
            {site.user.title || site.user.username}
          </Heading>
        </div>
        <div className="bio">
          <Text>{site.user.bio}</Text>
        </div>
      </div>

      <div className="site__links">
        {site.links.map((link) => (
          <div className="link" key={link._id}>
            <button>
              <a href={link.href}>{link.title}</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Site;
