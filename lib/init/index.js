const inquirer = require('inquirer');

const Config = require('../config');
const questions = require('./questions');

const prompt = () => inquirer.prompt(questions).then((answers) => answers);

const init = async () => {
  const {
    configPath, configType, projectName, servicesFolder,
  } = await prompt();
  const config = {
    ...Config.defaultConfig,
    project_name: projectName,
    config_path: configPath || Config.defaultConfig.config_path,
    services_folder: servicesFolder,
  };
  const servicesList = Config.ServiceLookUp.findServices(servicesFolder);
  if (servicesList !== null && servicesList.length !== 0) {
    config.services = servicesList;
  }
  Config.writeConfig(config, configType);
};

module.exports = init;
