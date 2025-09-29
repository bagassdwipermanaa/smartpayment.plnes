import React from "react";

// Force reload - updated content
const HeroSection = () => {
  console.log("HeroSection rendered with new content!");
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="/images/engineer-holding-laptop-check-construction-work-labor-day-concept.jpg"
          alt="Smart Payment PLN"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span>SOLUSI PEMBAYARAN LISTRIK TERDEPAN</span>
        </div>

        <h1 className="hero-title">
          Smart Payment
          <br />
          <span className="gradient-text">PLN Electricity</span>
        </h1>

        <p className="hero-subtitle">
          Bayar tagihan listrik PLN dengan mudah, cepat, dan aman. Nikmati
          kemudahan pembayaran listrik kapan saja dan di mana saja.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Mulai Bayar Listrik
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary">
            <span className="btn-icon">📱</span>
            Download App
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
