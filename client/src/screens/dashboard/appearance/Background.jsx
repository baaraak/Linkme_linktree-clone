import React, { useState } from 'react';
import { Transformation, Image } from 'cloudinary-react';
import { Dialog, Strong, Text } from 'evergreen-ui';
import ReactGPicker from 'react-gcolor-picker';

import { CLOUD_NAME, useCloudinaryWidget } from 'services/cloudinary';

const BACKGROUNDS = [
  'flowers',
  'gradient',
  'lights',
  'mounts',
  'rain',
  'music',
  'stars',
  'wood',
  'tech',
  'road',
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
            key={bg}
            onClick={() => onChange({ background: bg })}
            className={`box-item ${bg === background ? 'box-item--selected' : ''}`}
          >
            <div className="box-item__thumbnail">
              <Image
                publicId={`linkme/${bg}.jpg`}
                cloudName={CLOUD_NAME}
                secure="true"
              >
                <Transformation width="125" height="190" crop="thumb" />
              </Image>
            </div>
            <div className="box-item__name">
              <Text>{bg.toUpperCase()}</Text>
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
      </Dialog>
    </div>
  );
};

export default Background;
