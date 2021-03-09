import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./styles.scss";
const ResizableInput = ({ defaultValue, onChange, placeholder, ...rest }) => {
  const [width, setWidth] = useState();
  const [value, setValue] = useState(defaultValue);
  const text = useRef();

  useEffect(() => {
    setWidth(Math.max(text.current.getBoundingClientRect().width, 20) + 10);
  }, [text, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };
  return (
    <div className="resizable-input">
      <input
        {...rest}
        style={{ width }}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      <span ref={text}>{value || placeholder}</span>
    </div>
  );
};

export default ResizableInput;
