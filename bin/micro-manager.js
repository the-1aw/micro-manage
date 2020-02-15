#!/usr/bin/env node
const program = require('commander');

const microManage = require('../lib');
const currentVersion = require('../package.json').version;

program.version(currentVersion);

program.command('init')
  .description('initialize micro-manage and create .mmrc')
  .action(microManage.init);

program.parse(process.argv);
