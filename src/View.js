/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { forwardRef } from 'react';

const View = forwardRef(({ children, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      css={css`
        position: relative;
        display: flex;
      `}
    >
      {children}
    </div>
  );
});

export default View;
