const fs = require('fs-extra');
const path = require('path');

exports.onCreateWebpackConfig = (({ stage, actions }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      devtool: 'source-map'
    });
  }
});

exports.onPostBuild = () => {
  console.log('Copy locale files');
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales'),
  );
};
