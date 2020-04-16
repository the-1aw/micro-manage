const copy = require('recursive-copy');
const path = require('path');

const switchEnv = (envPath, serviceList) => {
  const options = {
    overwrite: true,
  };
  const serviceValues = Object.values(serviceList).filter((service) => !service.langage);
  // eslint-disable-next-line
  for (const service of serviceValues) {
    copy(path.join(envPath, service.language), path.join(service.path, '.env'), options)
      .on(copy.events.COPY_FILE_START, (copyOperation) => {
        console.info(`Copying file ${copyOperation.src}...`);
      })
      .on(copy.events.COPY_FILE_COMPLETE, (copyOperation) => {
        console.info(`Copied to ${copyOperation.dest}`);
      })
      .on(copy.events.ERROR, (_, copyOperation) => {
        console.error(`Unable to copy ${copyOperation.dest}`);
      });
  }
};

module.exports = {
  switchEnv,
};
