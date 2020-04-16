const fs = require('fs');
const path = require('path');
const YAML = require('js-yaml');

const getConfPath = (type) => path.join(process.cwd(), `.mmrc.${type}`);

const writeConfig = (jsConfig, configType = 'json') => {
  let config = '';
  switch (configType) {
    case 'yaml':
      config = YAML.dump(jsConfig);
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
};
