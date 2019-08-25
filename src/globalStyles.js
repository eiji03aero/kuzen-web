import { injectGlobal } from 'emotion';

export const injectGlobalStyle = () => injectGlobal`
  html, body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
