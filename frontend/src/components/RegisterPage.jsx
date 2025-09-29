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
              <h1
                className="script-title"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Registration
              </h1>
              <h2
                className="main-title"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                PENDAFTARAN VENDOR
              </h2>
            </div>

            <form
              className="registration-form"
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="400"
              >
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

              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="500"
              >
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

              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="600"
              >
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

              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="700"
              >
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

              <div
                className="form-group full-width"
                data-aos="fade-up"
                data-aos-delay="800"
              >
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

              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="900"
              >
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
                    {showPassword ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
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
                    {showConfirmPassword ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div
                className="form-group register-btn-group"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
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
