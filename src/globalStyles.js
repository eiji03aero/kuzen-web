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

  h1,h2,h3,h4,h5,h6,p,dd,dl {
    margin: 0;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }

  address {
    font-style: normal;
  }

  ${styles.mobileOnly} {
  }
`;
