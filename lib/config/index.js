const path = require('path');
const fs = require('fs');
const YAML = require('yaml');

const defaultConfig = require('./template/default-config');
const ServiceLookUp = require('./serviceLookUp');

const getConfPath = (type) => path.join(process.cwd(), `.mmrc.${type}`);

const writeConfig = (jsConfig, configType = 'json') => {
  let config = '';
  switch (configType) {
    case 'yaml':
      config = YAML.stringify(jsConfig);
      break;
    case 'js':
      config = `module.exports = ${JSON.stringify(jsConfig, null, 2)}`;
      break;
    default:
      config = JSON.stringify(jsConfig, null, 2);
  }
  fs.writeFileSync(getConfPath(configType), config);
};

module.exports = {
  writeConfig,
  defaultConfig,
  ServiceLookUp,
};
