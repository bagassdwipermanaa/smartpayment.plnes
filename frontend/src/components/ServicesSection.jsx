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
      question: "Bagaimana cara mengelola pembayaran vendor di Smart Payment?",
      answer:
        "Sangat mudah! Cukup buka aplikasi, tambah vendor baru atau pilih vendor yang sudah terdaftar, upload tagihan vendor, pilih metode pembayaran, dan konfirmasi. Pembayaran langsung terverifikasi dalam hitungan detik.",
    },
    {
      question: "Apakah ada biaya admin untuk pembayaran vendor?",
      answer:
        "Tidak ada sama sekali! Smart Payment tidak memungut biaya admin atau biaya tambahan apapun. Anda hanya membayar sesuai tagihan vendor yang sudah disetujui.",
    },
    {
      question: "Bagaimana keamanan data vendor dijamin?",
      answer:
        "Data dan transaksi vendor dilindungi dengan enkripsi tingkat bank dan sistem keamanan berlapis. Kami menggunakan teknologi terdepan untuk memastikan privasi dan keamanan maksimal.",
    },
    {
      question: "Bisa cek riwayat pembayaran vendor?",
      answer:
        "Tentu saja! Anda bisa melihat detail tagihan vendor, riwayat pembayaran lengkap, dan download laporan pembayaran kapan saja melalui dashboard Smart Payment.",
    },
    {
      question: "Bagaimana jika ada masalah saat pembayaran vendor?",
      answer:
        "Tim support kami siap membantu 24/7. Anda bisa chat langsung, lihat FAQ, atau ikuti video tutorial yang tersedia di aplikasi untuk mengelola vendor.",
    },
    {
      question: "Apakah Smart Payment resmi dari PLN?",
      answer:
        "Smart Payment adalah platform resmi yang bekerja sama dengan PLN untuk memudahkan pengelolaan pembayaran vendor. Semua transaksi terintegrasi langsung dengan sistem PLN.",
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
            tentang pengelolaan pembayaran vendor di Smart Payment
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
