const path = require('path');

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project ?',
    default: () => path.basename(process.cwd()),
  },
  {
    type: 'list',
    name: 'configType',
    message: 'What kind format do you want to use as config file ?',
    default: 'json',
    choices: [
      { name: 'JSON', value: 'json' },
      { name: 'YAML', value: 'yaml' },
      { name: 'JS', value: 'js' },
    ],
  },
  {
    type: 'input',
    name: 'servicesFolder',
    message: 'Which folder do you want to use to store your services ?',
    default: './services',
  },
  {
    type: 'confirm',
    name: 'moduleLookUp',
    message: 'Do you want try autogenerating config from your services folder',
    default: false,
  },
  {
    type: 'confirm',
    name: 'needConfig',
    message: 'Do you to set a config path',
    default: false,
  },
  {
    type: 'input',
    name: 'configPath',
    message: 'What path do you want to use for your config files ?',
    default: './config',
    when: (answers) => answers.needConfig,
  },
];

module.exports = questions;
