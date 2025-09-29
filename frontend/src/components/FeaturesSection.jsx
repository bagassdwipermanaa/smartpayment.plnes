import React, { useEffect, useRef } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Pembayaran Vendor Instan",
      description:
        "Proses pembayaran tagihan vendor dalam hitungan detik dengan konfirmasi real-time",
    },
    {
      icon: "🔒",
      title: "Keamanan Maksimal",
      description:
        "Data dan transaksi vendor dilindungi dengan enkripsi tingkat bank",
    },
    {
      icon: "📱",
      title: "Dashboard Terintegrasi",
      description:
        "Interface yang mudah digunakan untuk mengelola semua vendor",
    },
    {
      icon: "💰",
      title: "Manajemen Biaya",
      description: "Kelola anggaran dan biaya vendor dengan transparansi penuh",
    },
    {
      icon: "📋",
      title: "Riwayat Vendor Lengkap",
      description: "Cek tagihan dan riwayat pembayaran vendor dengan mudah",
    },
    {
      icon: "🎧",
      title: "Support 24/7",
      description: "Tim support siap membantu kelola vendor kapan saja",
    },
  ];

  return (
    <section className="features-section" ref={sectionRef}>
      <div className="container">
        <div className={`features-header ${isVisible ? "animate-in" : ""}`}>
          <h2 className="features-main-title">
            Fitur <span className="gradient-text">Smart Payment</span>
          </h2>
          <p className="features-subtitle">
            Kelola pembayaran vendor PLN dengan fitur-fitur unggulan dan
            terintegrasi
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${isVisible ? "animate-in" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
