const { injectGlobalStyle } = require('./src/globalStyles.js');

exports.onClientEntry = () => {
  injectGlobalStyle();
};
