/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Text from './Text';

const Badge = ({ value, ...props }) => {
  return (
    <Text
      {...props}
      css={css`
        width: 25px;
        height: 25px;
        background-color: #e60012;
        font-size: 12px;
        color: #ffffff;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      `}
    >
      {value}
    </Text>
  );
};

export default Badge;
