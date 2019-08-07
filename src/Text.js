/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Text = ({ children, ...props }) => {
  return (
    <span
      css={css`
        display: flex;
      `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
