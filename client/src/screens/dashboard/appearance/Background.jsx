import React from "react";
import { Transformation, Image } from "cloudinary-react";
import { Strong, Text } from "evergreen-ui";
import { CLOUD_NAME } from "services/cloudinary";

const BACKGROUNDS = [
  "flowers",
  "gradient",
  "lights",
  "mounts",
  "rain",
  "music",
  "stars",
  "wood",
  "tech",
  "road",
];

const Background = ({ background, onChange }) => {
  return (
    <div className="backgrounds">
      <Strong size={600} className="box__title">
        Background
      </Strong>
      <div className="box shadow-sm">
        <div className="box-item box-item--custom">
          <div className="box-item__thumbnail">CHOOSE COLOR</div>
          <div className="box-item__name">
            <Text>COLOR</Text>
          </div>
        </div>
        <div className="box-item box-item--custom">
          <div className="box-item__thumbnail">UPLOAD IMAGE</div>
          <div className="box-item__name">
            <Text>UPLOAD</Text>
          </div>
        </div>

        {BACKGROUNDS.map((bg) => (
          <div
            key={bg}
            onClick={() => onChange({ background: bg })}
            className={`box-item ${
              bg === background ? "box-item--selected" : ""
            }`}
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
    </div>
  );
};

export default Background;
