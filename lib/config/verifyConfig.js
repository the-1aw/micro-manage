const fs = require('fs');
const path = require('path');

const isEnvSetup = (config) => {
  if (!config.envs) return false;
  if (!config.config_path) return false;
  return true;
};

const envExsist = (config, envName) => {
  if (!config.envs.includes(envName)) return false;
  if (!fs.existsSync(path.join(process.cwd(), config.config_path, envName))) {
    console.error(`${path.join(config.config_path, envName)} no such file or directory`);
    return false;
  }
  return true;
};

module.exports = {
  isEnvSetup,
  envExsist,
};
