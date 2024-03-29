import { useSite } from 'context/site.context';
import React from 'react';
import Site from 'screens/site';
import './styles.scss';
const Preview = () => {
  const { data: site } = useSite();
  console.log('***********************');
  console.log(site);
  console.log('***********************');
  return (
    <div className="preview">
      <div className="device device-iphone-x">
        <div className="device-frame">
          <div className="device-content">
            <Site site={site} />
          </div>
        </div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
        <div className="device-home"></div>
      </div>
    </div>
  );
};

export default Preview;
