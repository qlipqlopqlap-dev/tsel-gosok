// PM2 ecosystem config — Gosok Kartu (standalone, port 5280).
// nginx reverse-proxies telkomsel1.qlipmobile.com → 127.0.0.1:5280.

module.exports = {
  apps: [
    {
      name: 'tsel-gosok',
      cwd: '/home/qlip/tsel-gosok',
      script: 'server.mjs',
      interpreter: 'node',
      instances: 1,
      exec_mode: 'fork',

      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: '5280',
      },

      // Restart behavior
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 2000,
      max_memory_restart: '500M',

      // Logs
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: '/home/qlip/tsel-gosok/logs/tsel-gosok.err.log',
      out_file: '/home/qlip/tsel-gosok/logs/tsel-gosok.out.log',
      merge_logs: true,
      time: true,
    },
  ],
}
