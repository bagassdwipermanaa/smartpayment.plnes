import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Di sini bisa ditambahkan logika untuk mengirim data ke backend
  };

  return (
    <div className="register-page">
      <Header />
      <main className="register-main">
        <div className="register-container">
          {/* Left Section - Registration Form */}
          <div className="registration-form-section">
            <div className="form-header">
              <h1 className="script-title">Registration</h1>
              <h2 className="main-title">PENDAFTARAN VENDOR</h2>
            </div>

            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  E-mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan email Anda"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  No. Telp <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nomor telepon"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Nama Perusahaan</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Masukkan nama perusahaan"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Kota</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Masukkan kota"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="address">Alamat Perusahaan</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Masukkan alamat perusahaan"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password <span className="required">*</span>
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                    tabIndex="-1"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Ulang Password <span className="required">*</span>
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Ulangi password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={toggleConfirmPassword}
                    tabIndex="-1"
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="form-group register-btn-group">
                <button type="submit" className="register-btn">
                  <span className="checkmark">✓</span>
                  Register
                </button>
              </div>

              <div className="form-group">
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
