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
      title: "Pembayaran Instan",
      description:
        "Bayar listrik dalam hitungan detik dengan konfirmasi real-time",
    },
    {
      icon: "🔒",
      title: "Keamanan Maksimal",
      description: "Data dan transaksi dilindungi dengan enkripsi tingkat bank",
    },
    {
      icon: "📱",
      title: "User-Friendly",
      description: "Interface yang mudah digunakan untuk semua kalangan",
    },
    {
      icon: "💰",
      title: "Tanpa Biaya Admin",
      description: "Tidak ada potongan atau biaya tambahan apapun",
    },
    {
      icon: "📋",
      title: "Riwayat Lengkap",
      description: "Cek tagihan dan riwayat pembayaran dengan mudah",
    },
    {
      icon: "🎧",
      title: "Support 24/7",
      description: "Customer support siap membantu kapan saja",
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
            Nikmati kemudahan pembayaran listrik PLN dengan fitur-fitur unggulan
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
