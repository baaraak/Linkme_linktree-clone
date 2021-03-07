import React from "react";
import { EditIcon, GroupedBarChartIcon, MediaIcon } from "evergreen-ui";

import "./styles.scss";

const Link = ({ title, href, active }) => {
  return (
    <div className="link shadow">
      <div className="link__handle">
        <svg width="4" height="16" viewBox="0 0 4 16">
          <path d="M0 2C0 .897.897 0 2 0s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 8c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 14c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2"></path>
        </svg>
      </div>
      <div className="link__content">
        <div className="input link__title">
          <input type="text" placeholder="Enter title" />
          <EditIcon />
        </div>
        <div className="input link__href">
          <input type="text" placeholder="http://url" />
          <EditIcon />
        </div>
        <div className="link__actions">
          <div className="thumbnails">
            <MediaIcon />
          </div>
          <div className="analytic">
            <GroupedBarChartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
