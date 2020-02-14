#!/usr/bin/env node
const program = require('commander');

const microManager = require("../lib");
const currentVersion = require('../package.json').version;

program.version(currentVersion);

program.parse(process.argv);

