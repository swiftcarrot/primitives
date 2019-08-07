/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import View from './View';

// todo:
// https://developer.apple.com/documentation/uikit/uitabbar

const TabBar = () => {
  return (
    <View
      css={css`
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        border-top: 1px solid #d0d0d0;
        background-color: #fff;
      `}
    ></View>
  );
};

TabBar.Item = () => {
  return <View></View>;
};

export default TabBar;
