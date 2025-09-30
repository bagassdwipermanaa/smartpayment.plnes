const pool = require("../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username/Email dan password harus diisi",
      });
    }

    // Find user by email OR username
    const [users] = await pool.execute(
      "SELECT * FROM data_pengguna WHERE EMAIL_PENGGUNA = ? OR USERNAME = ?",
      [email, email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Username/Email atau password salah",
      });
    }

    const user = users[0];

    // Check if user is active
    if (user.STATUS_USER !== "1") {
      return res.status(401).json({
        success: false,
        message: "Akun tidak aktif",
      });
    }

    // Compare password (assuming password is stored as plain text in the database)
    // If you want to hash passwords, you can use bcrypt.compare()
    const isPasswordValid = user.PASSWORD === password;

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Username/Email atau password salah",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.ID_PENGGUNA,
        email: user.EMAIL_PENGGUNA,
        username: user.USERNAME,
        nama: user.NAMA_PENGGUNA,
        jabatan: user.JABATAN_PENGGUNA,
        jenisUser: user.JENIS_USER,
        region: user.REGION,
        divisi: user.DIVISI,
        unitLayanan: user.UNIT_LAYANAN,
      },
      process.env.JWT_SECRET || "smartpayment_jwt_secret_key_2024",
      { expiresIn: "24h" }
    );

    // Return success response
    res.json({
      success: true,
      message: "Login berhasil",
      data: {
        token,
        user: {
          id: user.ID_PENGGUNA,
          username: user.USERNAME,
          nama: user.NAMA_PENGGUNA,
          email: user.EMAIL_PENGGUNA,
          jabatan: user.JABATAN_PENGGUNA,
          jenisUser: user.JENIS_USER,
          region: user.REGION,
          divisi: user.DIVISI,
          unitLayanan: user.UNIT_LAYANAN,
          statusUser: user.STATUS_USER,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};

// Get user profile
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const [users] = await pool.execute(
      "SELECT * FROM data_pengguna WHERE ID_PENGGUNA = ?",
      [userId]
    );

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan",
      });
    }

    const user = users[0];

    res.json({
      success: true,
      data: {
        id: user.ID_PENGGUNA,
        username: user.USERNAME,
        nama: user.NAMA_PENGGUNA,
        email: user.EMAIL_PENGGUNA,
        jabatan: user.JABATAN_PENGGUNA,
        jenisUser: user.JENIS_USER,
        region: user.REGION,
        divisi: user.DIVISI,
        unitLayanan: user.UNIT_LAYANAN,
        statusUser: user.STATUS_USER,
        alamat: user.ALAMAT_PENGGUNA,
        noTelp: user.NO_TELP_PENGGUNA,
      },
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};

// Logout function (optional - mainly for token blacklisting)
const logout = async (req, res) => {
  try {
    // In a real application, you might want to blacklist the token
    res.json({
      success: true,
      message: "Logout berhasil",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};

module.exports = {
  login,
  getProfile,
  logout,
};
