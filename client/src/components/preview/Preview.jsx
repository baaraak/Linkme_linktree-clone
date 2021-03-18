import { useSite } from 'context/site.context';
import React from 'react';
import Site from 'screens/site';
import { generateSiteUrl } from 'services/utils';
import './styles.scss';
const Preview = ({ username }) => {
  const { data: site } = useSite();

  return (
    <div className="preview">
      <div class="device device-iphone-x">
        <div class="device-frame">
          <div className="device-content">
            <Site site={site} />
          </div>
        </div>
        <div class="device-header"></div>
        <div class="device-sensors"></div>
        <div class="device-btns"></div>
        <div class="device-power"></div>
        <div class="device-home"></div>
      </div>
    </div>
  );
};

export default Preview;
