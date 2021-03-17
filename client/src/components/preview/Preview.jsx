import React from 'react';
import { generateSiteUrl } from 'services/utils';

const Preview = ({ username }) => {
  return (
    <div className="preview">
      <div className="preview__wrapper">
        <iframe src="/admin" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default Preview;
