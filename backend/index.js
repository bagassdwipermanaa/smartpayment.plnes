const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3001', 'http://10.69.255.196:3001', 'http://localhost:3000', 'http://10.69.255.196:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");

// API Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Smart Payment Backend API",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
    },
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}`);
  console.log(`External access: http://10.69.255.196:${PORT}`);
});
