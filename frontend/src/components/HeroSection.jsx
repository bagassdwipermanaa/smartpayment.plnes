import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="/images/engineer-holding-laptop-check-construction-work-labor-day-concept.jpg"
          alt="Professional engineers"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span>POWER YOUR BUSINESS WITH US</span>
        </div>

        <h1 className="hero-title">
          Smart Payment Solutions
          <br />
          <span className="gradient-text">Innovative Technology</span>
        </h1>

        <p className="hero-subtitle">
          We provide cutting-edge payment solutions for modern businesses.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Explore Smart Payment
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary">
            <span className="btn-icon">📧</span>
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
