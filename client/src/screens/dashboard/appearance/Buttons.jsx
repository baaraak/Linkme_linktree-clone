import Button from 'components/button/Button';
import { Dialog, SegmentedControl, Strong } from 'evergreen-ui';
import React, { useState } from 'react';
import ReactGPicker from 'react-gcolor-picker';

const buttons = [
  { type: 'fill', label: 'Fill', variants: ['regular', 'rounded', 'fullrounded'] },
  {
    type: 'outline',
    label: 'Outline',
    variants: ['regular', 'rounded', 'fullrounded'],
  },
  {
    type: 'hard-shadow',
    label: 'Hard Shadow',
    variants: ['regular', 'rounded', 'fullrounded'],
  },
  {
    type: 'soft-shadow',
    label: 'Soft Shadow',
    variants: ['regular', 'rounded', 'fullrounded'],
  },
  {
    type: 'special',
    label: 'Special',
    variants: [],
  },
];

const Buttons = ({ onChange, button = { id: 'outline-rounded', color: 'red' } }) => {
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState(button.color);
  const onColorChange = (value) => {
    console.log(value);
    setButtonColor(value);
  };

  const onCancelColor = () => {
    // reset color and close modal
    setButtonColor(button.color);
    setColorPickerOpen(false);
  };
  console.log(buttonColor);
  return (
    <div className="buttons">
      <Strong size={600} className="box__title">
        Buttons
      </Strong>
      <div className="box shadow-sm">
        <div className="field">
          <Strong>Shadow Type</Strong>
          <SegmentedControl
            options={[
              { label: 'Small', value: 'small' },
              { label: 'medium', value: 'medium' },
              { label: 'large', value: 'large' },
              { label: 'Extra Large', value: 'xlarge' },
            ]}
          />
        </div>
        <div className="field">
          <Strong>Size</Strong>
          <SegmentedControl
            options={[
              { label: 'Small', value: 'small' },
              { label: 'medium', value: 'medium' },
              { label: 'large', value: 'large' },
              { label: 'Extra Large', value: 'xlarge' },
            ]}
          />
        </div>
        <div className="field">
          <Strong>Size</Strong>
          <SegmentedControl
            options={[
              { label: 'Small', value: 'small' },
              { label: 'medium', value: 'medium' },
              { label: 'large', value: 'large' },
              { label: 'Extra Large', value: 'xlarge' },
            ]}
          />
        </div>
        <div className="color">
          <Strong>Button color</Strong>
          <div className="color__picker" onClick={() => setColorPickerOpen(true)}>
            <div
              className="color__preview shadow"
              style={{ background: buttonColor }}
            />
            <Strong size={300}>Change color</Strong>
          </div>
        </div>
      </div>
      <Dialog
        isShown={colorPickerOpen}
        onCloseComplete={() => setColorPickerOpen(false)}
        hasHeader={false}
        width={'auto'}
        hasFooter={false}
      >
        <ReactGPicker value={buttonColor} gradient onChange={onColorChange} />
        <div className="color-preview-footer">
          <Button height={40} onClick={onCancelColor}>
            Cancel
          </Button>
          <Button
            height={40}
            appearance="primary"
            onClick={() => {
              setColorPickerOpen(false);
              onChange({ button: { color: buttonColor } });
            }}
          >
            Choose
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Buttons;
