const fs = require('fs');
const path = require('path');
const importFresh = require('import-fresh');

const configFilnames = [
  '.mmrc.json',
  '.mmrc.js',
  '.mmrc.yml',
  '.mmrc.yaml',
];

const readFile = (filename) => fs.readFileSync(filename);

const loadJSconfig = (configPath) => {
  try {
    return importFresh(configPath);
  } catch (err) {
    err.message = `Cannot read config file: ${configPath}\nError: ${err.message}`;
    throw err;
  }
};

const loadYAMLconfig = (configPath) => {
  // In order to be more efficient, do not load yaml lib if not needed
  // eslint-disable-next-line
  const YAML = require('js-yaml');
  try {
    return YAML.safeLoad(readFile(configPath));
  } catch (err) {
    err.message = `Cannot read config file: ${configPath}\nError: ${err.message}`;
    throw err;
  }
};

const loadJSONonfig = (configPath) => {
  try {
    return JSON.parse(readFile(configPath));
  } catch (err) {
    err.message = `Cannot read config file: ${configPath}\nError: ${err.message}`;
    throw err;
  }
};

const loadConfigFile = (filePath) => {
  const ext = path.extname(filePath);
  switch (ext) {
    case '.js':
      return loadJSconfig(filePath);
    case '.yml':
    case '.yaml':
      return loadYAMLconfig(filePath);
    default:
      return loadJSONonfig(filePath);
  }
};

const loadConfigFromDirectory = (dirPath = './') => {
  // eslint-disable-next-line
  for (const filename of configFilnames) {
    const filePath = path.join(dirPath, filename);
    if (fs.existsSync(filePath)) {
      return loadConfigFile(filePath);
    }
  }

  return {};
};

module.exports = {
  loadConfigFile,
  loadConfigFromDirectory,
};
