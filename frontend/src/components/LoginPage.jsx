import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Save user data and token to localStorage
        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem("token", data.data.token);

        // Navigate to dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Login gagal");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        "Terjadi kesalahan server. Pastikan backend berjalan di port 3000."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h1
                className="login-title"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Welcome Back
              </h1>
              <p
                className="login-subtitle"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                Sign in to your Smart Payment account
              </p>
              <div
                className="login-logo"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  src="/images/logoplnes-removebg-preview.png"
                  alt="PLN Logo"
                  className="logo-image"
                />
              </div>
            </div>

            <div className="login-form-container">
              <form
                className="login-form"
                onSubmit={handleSubmit}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {error && (
                  <div
                    className="error-message"
                    data-aos="fade-up"
                    data-aos-delay="450"
                  >
                    {error}
                  </div>
                )}

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <label htmlFor="email" className="form-label">
                    Email atau Username
                  </label>
                  <div className="input-wrapper">
                    <div className="input-icon">
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your email or username"
                      required
                    />
                  </div>
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-wrapper">
                    <div className="input-icon">
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
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
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
                  className="form-options"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <label className="checkbox-wrapper">
                    <input type="checkbox" className="checkbox-input" />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-label">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="forgot-link">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className={`login-button ${isLoading ? "loading" : ""}`}
                  disabled={isLoading}
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  {isLoading ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              <div
                className="login-footer"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <p className="signup-text">
                  Don't have an account?{" "}
                  <Link to="/register" className="signup-link">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="login-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
            <div className="decoration-shape shape-1"></div>
            <div className="decoration-shape shape-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
