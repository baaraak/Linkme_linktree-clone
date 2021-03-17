import React from 'react';
import { Button as ButtonUI } from 'evergreen-ui';

import './styles.scss';

const Button = React.forwardRef(
  ({ children, className, height, fullWidth, ...props }, ref) => {
    return (
      <ButtonUI
        ref={ref}
        {...props}
        height={height}
        className={`btn ${className} ${fullWidth ? 'btn-fullWidth' : ''}`}
      >
        {children}
      </ButtonUI>
    );
  },
);

export default Button;
