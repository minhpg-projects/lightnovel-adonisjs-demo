module.exports = {
    apps: [
      {
        name: 'adonis-web',
        script: './build/server.js',
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
      },
    ],
  }