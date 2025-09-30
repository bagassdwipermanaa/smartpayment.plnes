const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token tidak ditemukan",
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "smartpayment_jwt_secret_key_2024",
    (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Token tidak valid",
        });
      }

      req.user = user;
      next();
    }
  );
};

module.exports = {
  authenticateToken,
};
