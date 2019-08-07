/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useRef, useEffect } from 'react';
import View from './View';

// todo: replace div
const ScrollView = ({
  children,
  contentContainerStyle,
  onScroll,
  ...props
}) => {
  const scroll = useRef();

  useEffect(() => {
    const el = scroll.current;

    // el.addEventListener('mousewheel', this.handleMousewheel, false);
    el.addEventListener('scroll', handleScroll, { passive: true });
    // el.addEventListener('resize', this.handleScroll, false);

    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (onScroll) onScroll(scroll.current);
  }

  return (
    <View
      {...props}
      ref={scroll}
      css={css`
        overflow-y: auto;
        flex-direction: column;
      `}
    >
      <div css={[contentContainerStyle]}>{children}</div>
    </View>
  );
};

export default ScrollView;
