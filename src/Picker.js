/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Image from './Image';

// todo: more picker props fix
const Picker = ({
  invalid,
  disabled,
  onChange,
  includeBlank,
  fullWidth,
  children,
  className,
  style,
  styles: customStyles,
  ...props
}) => {
  function handleChange(e) {
    if (onChange) {
      onChange(e.target.value);
    }
  }

  const styles = {
    container: [
      { ...defaultStyles.container, ...customStyles.container },
      {
        '&:focus': { ...defaultStyles.focus, ...customStyles.focus }
      },
      invalid && { ...defaultStyles.invalid, ...customStyles.invalid },
      disabled && { ...defaultStyles.disabled, ...customStyles.disabled },
      fullWidth && { ...defaultStyles.fullWidth, ...customStyles.fullWidth }
    ],
    select: { ...defaultStyles.select, ...customStyles.select },
    caret: { ...defaultStyles.caret, ...customStyles.caret }
  };

  return (
    <div css={styles.container} className={className} style={style}>
      <select
        {...props}
        css={styles.select}
        onChange={handleChange}
        disabled={disabled}
      >
        {includeBlank ? (
          <Fragment>
            <option value="" />
            {children}
          </Fragment>
        ) : (
          children
        )}
      </select>

      <Image source={require('images/triangle.svg')} css={styles.caret} />
    </div>
  );
};

Picker.defaultProps = {
  invalid: false,
  disabled: false,
  includeBlank: false,
  fullWidth: false,
  styles: {}
};

const defaultStyles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#fff',
    borderRadius: 2,
    border: '1px solid #e4decc'
  },

  select: {
    width: '100%',
    appearance: 'none',
    borderRadius: 0,
    fontSize: 26,
    fontWeight: '500',
    lineHeight: 1,
    border: 0,
    background: 'transparent',
    padding: '36px 32px 36px 25px',
    color: '#565656',
    outline: 0
  },

  fullWidth: {
    width: '100%'
  },

  caret: {
    position: 'absolute',
    top: 30,
    right: 12,
    pointerEvents: 'none'
  }
};

Picker.Item = ({ label, value }) => {
  return <option value={value}>{label}</option>;
};

export default Picker;
