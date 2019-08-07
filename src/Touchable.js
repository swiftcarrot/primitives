/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import View from './View';

// todo: more events handling
const Touchable = ({ onPress, children, ...props }) => {
  return (
    <View
      {...props}
      onClick={onPress}
      css={css`
        cursor: pointer;
        &:active {
          opacity: 0.4;
        }
      `}
    >
      {children}
    </View>
  );
};

export default Touchable;
