/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import View from './View';
import Text from './Text';

// todo:
// https://developer.apple.com/documentation/uikit/uinavigationbar

const NavigationBar = ({ title }) => {
  return (
    <View
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 48px;
        background-color: #d43d33;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: #fff;
        z-index: 10;
      `}
    >
      <View>Back</View>
      <Text
        css={css`
          font-size: 18px;
        `}
      >
        {title}
      </Text>
    </View>
  );
};

export default NavigationBar;
