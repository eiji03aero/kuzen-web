// This script is not really required since putting locale files
// in static folder works enough
//
// const path = require('path');
// const chokidar = require('chokidar');
// const exec = require('child_process').execSync;
//
// const blue = '\u001b[34m';
// const reset = '\u001b[0m';
// const yellow = '\u001b[33m';
//
// const rootDir = path.resolve(__dirname, '..');
// const srcDir = path.join(rootDir, '/src/locales');
// const distDir = path.join(rootDir, '/public/locales');
//
// const copyAll = path => {
//   const d = new Date();
//   const time = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
//
//   console.log(`${blue + '[Copy]'} ${yellow + time} ${reset + path}`);
//
//   exec(`rm -rf ${distDir}/*`);
//   exec(`cp -r ${srcDir}/* ${distDir}`)
// };
//
// console.log('starting to watch locale files...');
// exec(`mkdir -p ${rootDir} ${distDir}`);
//
// chokidar
//   .watch(srcDir, { persistent: true })
//   .on('add', copyAll)
//   .on('change', copyAll)
//   .on('unlink', copyAll);
