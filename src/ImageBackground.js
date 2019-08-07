/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import View from './View';

const ImageBackground = ({ src, children, style, ...props }) => {
  return (
    <View
      {...props}
      css={css`
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      `}
      style={{
        ...style,
        backgroundImage: `url(${src})`
      }}
    >
      {children}
    </View>
  );
};

export default ImageBackground;
