const { injectGlobalStyle } = require('./src/globalStyles.js');
const { initI18n } = require('./src/i18n.js');

exports.onClientEntry = () => {
  injectGlobalStyle();
  initI18n();
};
