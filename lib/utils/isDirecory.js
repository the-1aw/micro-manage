const fs = require('fs');

const isDirectory = (path) => {
  try {
    return fs.statSync(path).isDirectory();
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`path not found: ${path}`);
      return false;
    }
    throw error;
  }
};

module.exports = isDirectory;
