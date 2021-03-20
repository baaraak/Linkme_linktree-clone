import { Strong, Text } from 'evergreen-ui';
import React from 'react';

const FONTS = [
  { id: 'Anton', label: 'Anton' },
  { id: 'Changa', label: 'Changa' },
  { id: 'Courgette', label: 'Courgette' },
  { id: 'Danicing_Script', label: 'Danicing_Script' },
  { id: 'Fredoka_One', label: 'Fredoka_One' },
  { id: 'Indie_Flower', label: 'Indie_Flower' },
  { id: 'Josefin_Sans', label: 'Josefin_Sans' },
  { id: 'Pacifico', label: 'Pacifico' },
  { id: 'Playfair_Display', label: 'Playfair_Display' },
  { id: 'Poppings', label: 'Poppings' },
  { id: 'Rajdhani', label: 'Rajdhani' },
  { id: 'Rboto', label: 'Rboto' },
  { id: 'Teko', label: 'Teko' },
  { id: 'Titililnim_web', label: 'Titililnim_web' },
];

const Fonts = ({ theme = 1 }) => {
  return (
    <div className="themes">
      <Strong size={600} className="box__title">
        Fonts
      </Strong>
      <div className="box shadow-sm">
        {themes.map((t) => (
          <div
            key={t}
            className={`theme ${t.id === theme ? 'theme--selected' : ''}`}
          >
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

export default Fonts;
