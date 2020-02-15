const fs = require('fs');

const { defaultConfig, getConfPath } = require('./config');

function init() {
  const configPath = getConfPath();
  if (fs.existsSync(configPath)) console.log('mm already initialized');
  else { fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), 'utf8'); }
}

module.exports = {
  init,
};
