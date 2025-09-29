import React from "react";

const FeaturesSection = () => {
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
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="features-main-title">
            Fitur <span className="gradient-text">Smart Payment</span>
          </h2>
          <p className="features-subtitle">
            Nikmati kemudahan pembayaran listrik PLN dengan fitur-fitur unggulan
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
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
