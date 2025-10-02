const mysql = require("mysql2");
require("dotenv").config();

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "10.69.255.196",
  user: process.env.DB_USER || "appdb4",
  password: process.env.DB_PASSWORD || "Hpjaya3455??",
  database: process.env.DB_NAME || "dbhpsp",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Get promise-based connection
const promisePool = pool.promise();

module.exports = promisePool;
