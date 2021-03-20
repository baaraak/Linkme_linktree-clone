import React, { useState } from 'react';
import { Transformation, Image } from 'cloudinary-react';
import { Dialog, Strong, Text } from 'evergreen-ui';
import ReactGPicker from 'react-gcolor-picker';

import { CLOUD_NAME, useCloudinaryWidget } from 'services/cloudinary';
import Button from 'components/button/Button';

export const BACKGROUNDS = [
  {
    id: 'flowers',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500636/linkme/flowers.jpg',
  },
  {
    id: 'gradient',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500644/linkme/gradient.jpg',
  },
  {
    id: 'lights',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500651/linkme/lights.jpg',
  },
  {
    id: 'mounts',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500658/linkme/mounts.jpg',
  },
  {
    id: 'rain',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500667/linkme/rain.jpg',
  },
  {
    id: 'music',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500674/linkme/music.jpg',
  },
  {
    id: 'stars',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500684/linkme/stars.jpg',
  },
  {
    id: 'wood',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615500695/linkme/wood.jpg',
  },
  {
    id: 'tech',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615501827/linkme/tech.jpg',
  },
  {
    id: 'road',
    url:
      'https://res.cloudinary.com/djyerevgr/image/upload/v1615501844/linkme/road.jpg',
  },
];

const Background = ({ background, onChange }) => {
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const { widget } = useCloudinaryWidget((error, result) => {
    if (!error && result && result.event === 'success') {
      onChange({ avatar: result.info.secure_url });
    }
  });
  const handleColorChange = (value) => {
    console.log(value);
  };
  return (
    <div className="backgrounds">
      <Strong size={600} className="box__title">
        Background
      </Strong>
      <div className="box shadow-sm">
        <div
          className="box-item box-item--custom"
          onClick={() => setColorPickerOpen(true)}
        >
          <div className="box-item__thumbnail">CHOOSE COLOR</div>
          <div className="box-item__name">
            <Text>COLOR</Text>
          </div>
        </div>
        <div className="box-item box-item--custom" onClick={() => widget.open()}>
          <div className="box-item__thumbnail">UPLOAD IMAGE</div>
          <div className="box-item__name">
            <Text>UPLOAD</Text>
          </div>
        </div>

        {BACKGROUNDS.map((bg) => (
          <div
            key={bg.id}
            onClick={() => onChange({ background: bg.id })}
            className={`box-item ${
              bg.id === background ? 'box-item--selected' : ''
            }`}
          >
            <div className="box-item__thumbnail">
              <Image
                publicId={`linkme/${bg.id}.jpg`}
                cloudName={CLOUD_NAME}
                secure="true"
              >
                <Transformation width="125" height="190" crop="thumb" />
              </Image>
            </div>
            <div className="box-item__name">
              <Text>{bg.id.toUpperCase()}</Text>
            </div>
          </div>
        ))}
      </div>
      <Dialog
        isShown={colorPickerOpen}
        onCloseComplete={() => setColorPickerOpen(false)}
        hasFooter={false}
        hasHeader={false}
        width={'auto'}
      >
        <ReactGPicker value="red" onChange={handleColorChange} gradient />
        <div className="color-preview-footer">
          <Button height={40} onClick={() => setColorPickerOpen(false)}>
            Cancel
          </Button>
          <Button height={40} appearance="primary">
            Choose
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Background;
