import { Image, Transformation } from 'cloudinary-react';
import React from 'react';
import { CLOUD_NAME } from 'services/cloudinary';

const Avatar = ({ src, size = 50 }) => {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <Image publicId={src} secure="true" cloudName={CLOUD_NAME}>
        <Transformation width={size} height={size} crop="thumb" radius="max" />
      </Image>
    </div>
  );
};

export default Avatar;
