import React from "react";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-background" data-aos="fade-in">
        <img
          src="/images/civil-engineers-checking-data-tablet.jpg"
          alt="Smart Payment PLN"
          className="cta-bg-image"
        />
        <div className="cta-overlay"></div>
      </div>

      <div className="cta-content">
        <div className="cta-badge" data-aos="fade-up" data-aos-delay="200">
          <span className="badge-icon">⚡</span>
          <span>SOLUSI PEMBAYARAN VENDOR TERDEPAN</span>
        </div>

        <h2 className="cta-title" data-aos="fade-up" data-aos-delay="400">
          Smart Payment - Electricity Services
        </h2>

        <button className="cta-button" data-aos="fade-up" data-aos-delay="600">
          Kelola Pembayaran Vendor →
        </button>
      </div>
    </section>
  );
};

export default CTASection;
