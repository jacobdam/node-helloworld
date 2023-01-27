module.exports = {
  deploy: {
    production: {
      user: 'opc',
      host: ['140.238.33.153'],
      ref: 'origin/main',
      repo: 'git@github.com:jacobdam/node-helloworld.git',
      path: '/home/opc/apps/helloworld',
      'post-deploy': 'npm install',
      ssh_options: ['ForwardAgent=yes'],
    },
  },
};
