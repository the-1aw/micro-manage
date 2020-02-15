const fs = require('fs');
const path = require('path');

const isDirectory = require('../utils/isDirecory');

const languageLookUp = (servicePath) => {
  if (fs.existsSync(path.join(servicePath, 'package.json'))) {
    return 'js';
  }
  return null;
};

const findServices = (serviceFolderPath) => {
  if (!isDirectory(serviceFolderPath)) {
    console.log('creating services folder...');
    fs.mkdirSync(serviceFolderPath);
    return null;
  }
  const direntList = fs.readdirSync(serviceFolderPath, {
    withFileTypes: true,
  });
  const servicesDirentList = direntList.filter((dirent) => dirent.isDirectory());
  const serviceConfigList = servicesDirentList.reduce((configs, dirent) => {
    const { name } = dirent;
    const servicePath = path.join(serviceFolderPath, name);
    const serviceConfig = {
      path: servicePath,
    };
    const language = languageLookUp(servicePath);
    if (language !== null) serviceConfig.language = language;
    return { ...configs, [name]: serviceConfig };
  }, {});
  return serviceConfigList;
};

module.exports = {
  findServices,
};
