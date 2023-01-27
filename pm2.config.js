module.exports = {
  deploy: {
    production: {
      user: 'opc',
      host: ['158.101.153.190'],
      ref: 'origin/master',
      repo: 'git@github.com:jacobdam/node-helloworld.git',
      path: '/home/opc/apps/helloworld',
      'post-deploy': 'npm install',
    },
  },
};
