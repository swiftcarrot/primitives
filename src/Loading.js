/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ActivityIndicator from './ActivityIndicator';
import View from './View';

const Loading = ({ size, color }) => (
  <View
    css={css`
      flex: 1;
      align-items: center;
      justify-content: center;
    `}
  >
    <ActivityIndicator size={size} color={color} />
  </View>
);

Loading.defaultProps = {
  size: 'small',
  color: '#aaa'
};

export default Loading;
