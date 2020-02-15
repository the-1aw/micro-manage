module.exports = {
  version: '0.0.1',
  language: 'js',
  path: '/services/service_a',
  set_beta: [
    'cmd 1',
    'cmd 2',
    'cmd 3',
    'cmd 4',
  ],
  set_prod: [
    'cmd 1',
    'cmd 2',
    'cmd 3',
    'cmd 4',
  ],
  dev: 'cmd / services / service_a',
  deploy: {
    beta: ['cmd_deploy / services / service_a'],
    prod: ['cmd_deploy / services / service_a'],
  },
};
