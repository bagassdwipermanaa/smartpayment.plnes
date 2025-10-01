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
      script: "serve",
      args: "frontend/dist -p 3001",
      cwd: "/var/mern/essp",
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
