const path = require('path');

const { loadConfigFromDirectory, validator } = require('../config');
const { switchEnv } = require('./switchEnv');

const env = (envName) => {
  const config = loadConfigFromDirectory(process.cwd());
  if (!validator.isEnvSetup(config)) {
    console.err('projet envirements are not setup');
    return;
  }
  if (!validator.envExsist(config, envName)) {
    console.error(`envirement ${envName} is not setup for this project`);
    return;
  }
  switchEnv(path.join(process.cwd(), config.config_path, envName), config.services);
};

module.exports = env;
