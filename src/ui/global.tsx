import { Theme, globalStyle } from 'onno-react';
import * as React from 'react';
import { Global, css } from '@emotion/core';
import th from './theme';

const theme: Theme = {
  globalStyles: th.globalStyles,
};

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        @keyframes color-change {
          0% {
            color: ${th.colors.white};
          }
          100% {
            color: ${th.colors.brand.primary};
          }
        }
      `}
    />
    <Global styles={globalStyle({ theme })} />
  </>
);

export default GlobalStyles;
