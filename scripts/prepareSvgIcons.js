// - read all the files from assets
//   - filter by extensions. only svg
// - cp all the svg into static/Icons
//   - rename files
// - read all the files in static/Icons
//   - keep filename and component name (extension removed)
// - create map file in distdir

var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var _ = require('lodash');

var SrcDir = path.join(__dirname, '../src/assets');
var StaticDistDir = path.join(__dirname, '../static/Icons');
var DistDir = path.join(__dirname, '../src/components/atoms/SvgIcon');
var MapFileName = 'SvgIconNameMap.js';

var relativeImportPath = path.relative(DistDir, StaticDistDir);

var getAllFiles = (initialPath) => {
  var files = [];

  var handler = (argPath) => {
    var stat = fs.statSync(argPath);
    if (stat.isDirectory()) {
      for (var p2 of fs.readdirSync(argPath)) {
        var childPath = path.join(argPath, p2);
        handler(childPath);
      }
    }
    else if (stat.isFile()) {
      files.push(argPath);
    }
  };

  handler(initialPath);
  return files;
};

exec(`rm -rf ${StaticDistDir}`);
exec(`mkdir -p ${StaticDistDir}`);

_.chain(getAllFiles(SrcDir))
  .filter((filePath) => !!filePath.match(/\.svg$/))
  .map((filePath) => {
    const fileName = path.basename(filePath);
    const renamedFileName = fileName.replace(/(-)|(\s)/g, '_');
    const svgIconName = renamedFileName.replace(/\.svg$/, '');
    const filePathInStatic = path.join(StaticDistDir, renamedFileName);

    fs.copyFileSync(filePath, filePathInStatic)
    return `export { default as ${svgIconName} } from '${relativeImportPath}/${renamedFileName}';`;
  })
  .join('\n')
  .thru((mapFileString) => {
    fs.writeFileSync(path.join(DistDir, MapFileName), mapFileString);
  })
  .value();
