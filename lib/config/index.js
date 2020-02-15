
const pkgDir = require('pkg-dir');
const path = require('path');
const defaultConfig = require('./template/default-config');

const getConfPath = () => path.join(pkgDir.sync(), '.mmrc.json');

module.exports = {
  defaultConfig,
  getConfPath,
};
