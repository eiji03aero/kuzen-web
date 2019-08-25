const fs = require('fs-extra');
const path = require('path');

exports.onPostBuild = () => {
  console.log('Copy locale files');
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales'),
  );
};
