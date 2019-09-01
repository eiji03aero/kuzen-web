var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var _ = require('lodash');

var SrcDir = path.join(__dirname, '../static/Icons');
var DistDir = path.join(__dirname, '../src/components/atoms/SvgIcon');
var mapFileName = 'SvgIconNameMap.js';

var relativeImportPath = path.relative(DistDir, SrcDir);
var mapFilePath = path.join(DistDir, mapFileName);
var svgIconFiles = fs.readdirSync(SrcDir);
var mapFileLines = [];

const mapFileString = _.chain(svgIconFiles)
  .filter((name) => !!name.match(/\.svg$/))
  .map((name) => {
    var formattedName = name.replace(/(-)|(\s)/g, '_');
    var svgIconName = formattedName.replace(/\.svg$/, '');

    // need to rename svg icons unless it's not compatible with react-svg-loader
    fs.renameSync(path.join(SrcDir, name), path.join(SrcDir, formattedName));

    var fileLine = `export { default as ${svgIconName} } from '${relativeImportPath}/${formattedName}';`
    return fileLine;
  })
  .join('\n')
  .value();

fs.writeFileSync(mapFilePath, mapFileString);
