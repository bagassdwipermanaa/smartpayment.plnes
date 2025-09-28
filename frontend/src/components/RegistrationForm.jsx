import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="registration-section">
      <div className="section-title">
        <h2 className="script-title">Registration</h2>
        <h3 className="main-title">PENDAFTARAN VENDOR</h3>
      </div>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-row">
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
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="company">Nama Perusahaan</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Alamat Perusahaan</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="city">Kota</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Ulang Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="register-btn">
            <span className="checkmark">✓</span>
            Register
          </button>
        </div>
      </form>

      <div className="online-registration">
        <h3>REGISTRASI ONLINE</h3>
        <div className="illustration">
          <div className="desk-person">
            <img
              src="/images/smart-asian-male-professional-civil-engineer-hand-hold-laptop-site-construction-check-with-infastrcture-building-background.jpg"
              alt="Professional engineer with laptop"
              className="illustration-image"
            />
          </div>
          <div className="documents">
            <div className="document-card">
              <img
                src="/images/workers-control-room.jpg"
                alt="Control room"
                className="doc-image"
              />
              <span>Control Room</span>
            </div>
            <div className="document-card">
              <img
                src="/images/young-asian-technician-man-colleague-safety-uniform-checking-operation-sun-photovoltaic-solar-panel-use-laptop-computer-while-working-solar-farm (1).jpg"
                alt="Solar technician"
                className="doc-image"
              />
              <span>Solar Technician</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
