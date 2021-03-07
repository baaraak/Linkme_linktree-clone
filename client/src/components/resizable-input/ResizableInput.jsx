import React, { useLayoutEffect, useRef, useState } from "react";

const ResizableInput = (props) => {
  const [width, setWidth] = useState();
  const input = useRef();

  return <input ref={input} {...props} style={{ width }} />;
};

export default ResizableInput;
