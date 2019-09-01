import { injectGlobal } from 'emotion';

import { styles } from './utils';

export const injectGlobalStyle = () => injectGlobal`
  html, body {
    ${styles.fonts.medium}
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }

  ${styles.mobileOnly} {
  }
`;
