import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./styles.scss";
const ResizableInput = (props) => {
  const [width, setWidth] = useState();
  const [value, setValue] = useState(props.value);
  const text = useRef();

  useEffect(() => {
    setWidth(Math.max(text.current.getBoundingClientRect().width, 20) + 10);
  }, [text, value]);
  return (
    <div className="resizable-input">
      <input
        {...props}
        style={{ width }}
        onChange={(e) => setValue(e.target.value)}
      />
      <span ref={text}>{value || props.placeholder}</span>
    </div>
  );
};

export default ResizableInput;
