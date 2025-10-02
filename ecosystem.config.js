module.exports = {
  apps: [
    {
      name: "smartpayment-backend",
      script: "./backend/index.js",
      cwd: "/var/mern/essp",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 8001,
      },
      error_file: "./logs/backend-error.log",
      out_file: "./logs/backend-out.log",
      log_file: "./logs/backend-combined.log",
      time: true,
    },
    {
      name: "smartpayment-frontend",
      script: "npm",
      args: "run preview -- --port 3001 --host 0.0.0.0",
      cwd: "/var/mern/essp/frontend",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
      },
      error_file: "./logs/frontend-error.log",
      out_file: "./logs/frontend-out.log",
      log_file: "./logs/frontend-combined.log",
      time: true,
    },
  ],
};
