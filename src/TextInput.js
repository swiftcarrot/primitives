/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const TextInput = props => {
  return (
    <input
      css={css`
        height: 100px;
        background-color: #fff;
        border: solid 1px #e4decc;
        border-radius: 2px;
        font-size: 30px;
        outline: 0;
        padding-left: 24px;
        padding-right: 24px;
        color: #565656;

        &::placeholder {
          color: #b5b5b6;
        }
      `}
      type="text"
      {...props}
    />
  );
};

export default TextInput;
