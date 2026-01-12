module.exports = {
  apps: [{
    name: 'metal-website',
    script: 'npm',
    args: 'start',
    cwd: '/home/metalxsteel/htdocs/metalxsteel.com.tr',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};


