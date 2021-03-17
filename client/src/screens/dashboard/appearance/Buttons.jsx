import { Strong, Text } from 'evergreen-ui';
import React from 'react';

const buttons = ['fill', 'outline', 'hard-shadow', 'soft-shadow'];

const Buttons = ({ button = 1 }) => {
  return (
    <div className="buttons">
      <Strong size={600} className="box__title">
        Buttons
      </Strong>
      <div className="box shadow-sm">
        {buttons.map((t) => (
          <div
            key={t}
            className={`button ${t.id === button ? 'button--selected' : ''}`}
          >
            <div className="button__thumbnail">
              <img src={t.thumbnail} alt="" />
            </div>
            <div className="button__name">
              <Text>Theme {t.id}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
