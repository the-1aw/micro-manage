const inquirer = require('inquirer');

const { defaultConfig, writeConfig } = require('../config');
const questions = require('./questions');

const prompt = () => inquirer.prompt(questions).then((answers) => answers);

const init = async () => {
  const {
    configPath, configType, projectName, servicesFolder,
  } = await prompt();
  const config = {
    ...defaultConfig,
    project_name: projectName,
    config_path: configPath || defaultConfig.config_path,
    services_folder: servicesFolder,
  };
  writeConfig(config, configType);
};

module.exports = init;
