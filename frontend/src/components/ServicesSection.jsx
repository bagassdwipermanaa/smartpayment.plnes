import React, { useState, useEffect, useRef } from "react";

const ServicesSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const faqs = [
    {
      question: "Bagaimana cara bayar listrik di Smart Payment?",
      answer:
        "Sangat mudah! Cukup buka aplikasi, scan QR code dari tagihan listrik atau input nomor pelanggan PLN, pilih metode pembayaran, dan konfirmasi. Pembayaran langsung terverifikasi dalam hitungan detik.",
    },
    {
      question: "Apakah ada biaya admin untuk pembayaran listrik?",
      answer:
        "Tidak ada sama sekali! Smart Payment tidak memungut biaya admin atau biaya tambahan apapun. Anda hanya membayar sesuai tagihan listrik PLN Anda.",
    },
    {
      question: "Bagaimana keamanan data saya dijamin?",
      answer:
        "Data dan transaksi Anda dilindungi dengan enkripsi tingkat bank dan sistem keamanan berlapis. Kami menggunakan teknologi terdepan untuk memastikan privasi dan keamanan maksimal.",
    },
    {
      question: "Bisa cek riwayat pembayaran listrik?",
      answer:
        "Tentu saja! Anda bisa melihat detail tagihan, riwayat pembayaran lengkap, dan download struk pembayaran kapan saja melalui aplikasi Smart Payment.",
    },
    {
      question: "Bagaimana jika ada masalah saat pembayaran?",
      answer:
        "Tim customer support kami siap membantu 24/7. Anda bisa chat langsung, lihat FAQ, atau ikuti video tutorial yang tersedia di aplikasi.",
    },
    {
      question: "Apakah Smart Payment resmi dari PLN?",
      answer:
        "Smart Payment adalah platform resmi yang bekerja sama dengan PLN untuk memudahkan pembayaran listrik. Semua transaksi terintegrasi langsung dengan sistem PLN.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="container">
        <div className={`services-header ${isVisible ? "animate-in" : ""}`}>
          <h2 className="services-main-title">
            Pertanyaan <span className="gradient-text">Sering Diajukan</span>
          </h2>
          <p className="services-subtitle">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
            tentang Smart Payment
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeFaq === index ? "active" : ""} ${
                isVisible ? "animate-in" : ""
              }`}
              onClick={() => toggleFaq(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <div className="faq-icon">
                  <span>{activeFaq === index ? "−" : "+"}</span>
                </div>
              </div>
              <div
                className={`faq-answer ${activeFaq === index ? "active" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
