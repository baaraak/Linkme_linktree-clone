import { Strong, Text } from "evergreen-ui";
import React from "react";

const themes = [
  {
    id: 1,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-ukelaylie.png",
  },
  {
    id: 2,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-confetti.png",
  },
  {
    id: 3,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-rainbow.png",
  },
  {
    id: 4,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-ukelaylie.png",
  },
  {
    id: 5,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-ukelaylie.png",
  },
  ,
  {
    id: 6,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-confetti.png",
  },
  {
    id: 7,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-rainbow.png",
  },
  {
    id: 8,
    thumbnail:
      "https://assets.production.linktr.ee/40d15a7568e6254d846e5a00fead987973fbf174/images/themes/selector-ukelaylie.png",
  },
];

const Buttons = ({ theme = 1 }) => {
  return (
    <div className="themes">
      <Strong size={600} className="box__title">
        Buttons
      </Strong>
      <div className="box shadow-sm">
        {themes.map((t) => (
          <div className={`theme ${t.id === theme ? "theme--selected" : ""}`}>
            <div className="theme__thumbnail">
              <img src={t.thumbnail} alt="" />
            </div>
            <div className="theme__name">
              <Text>Theme {t.id}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
