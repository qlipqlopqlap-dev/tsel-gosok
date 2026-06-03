// PM2 ecosystem config — Pecahkan Telur (Double) (standalone, port 5286).
// nginx reverse-proxies telkomsel1double.qlipmobile.com → 127.0.0.1:5286.

module.exports = {
  apps: [
    {
      name: 'tsel-gosok-double',
      cwd: '/home/qlip/tsel-gosok-double',
      script: 'server.mjs',
      interpreter: 'node',
      instances: 1,
      exec_mode: 'fork',

      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: '5286',
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
      error_file: '/home/qlip/tsel-gosok-double/logs/tsel-gosok-double.err.log',
      out_file: '/home/qlip/tsel-gosok-double/logs/tsel-gosok-double.out.log',
      merge_logs: true,
      time: true,
    },
  ],
}
