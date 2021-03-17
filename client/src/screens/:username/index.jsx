import React from 'react';

const Site = ({ site }) => {
  console.log(site);
  return (
    <div className="site" style={{ backgroundImage: `url(${site.background})` }}>
      {JSON.stringify(site)}
    </div>
  );
};

export default Site;
