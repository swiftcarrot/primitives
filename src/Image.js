/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

// todo: @2x @3x support
// todo: resizeMode
// todo: placeholderSource
// todo: show image when loaded
// todo: lazy loading as optional
const Image = ({
  source,
  resizeMode,
  onLoad,
  onLoadEnd,
  onLoadStart,
  lazy,
  ...props
}) => {
  const src = source && source.uri ? source.uri : source;
  const [loaded, setLoaded] = useState(false);

  function handleLoad() {
    setLoaded(true);
  }

  return (
    <img
      css={
        lazy && [
          css`
            opacity: 0;
            transition: opacity 300ms ease;
          `,
          loaded &&
            css`
              opacity: 1;
            `
        ]
      }
      onLoad={handleLoad}
      src={src}
      {...props}
    />
  );
};

Image.defaultProps = {
  draggable: false,
  lazy: false
};

export default Image;
