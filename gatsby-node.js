const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');

const RootDir = path.resolve(__dirname);

exports.onCreateWebpackConfig = (({ stage, actions }) => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      devtool: 'source-map'
    });
  }
});

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const features = JSON.parse(fs.readFileSync(path.join(RootDir, 'static/features.json')));
  Object.entries(features).forEach(([key, data]) => {
    actions.createNode({
      name: key,
      icon: data.icon,
      id: createNodeId(`feature-${key}`),
      internal: {
        type: "Feature",
        contentDigest: createContentDigest({key, data})
      }
    });
  });
};

exports.onPostBuild = () => {
};
