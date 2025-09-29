import React, { useState, useEffect, useRef } from "react";

const ContactUsSection = () => {
  const [activeContact, setActiveContact] = useState(0);
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

  const contactData = [
    {
      id: 0,
      topic: "Kantor Pusat PLN Electricity Services",
      date: "2024-12-20 10:00:00",
      info: "Gedung 19 PT PLN (Persero) Pusat Sertifikasi, Jl. Laboratorium No.1, Duren Tiga, Pancoran, Jakarta Selatan 12760. Hubungi kami untuk informasi lebih lanjut tentang layanan Smart Payment.",
      details: {
        phone: "(+62) 21-7919-2577",
        email: "smartpayment@plnes.co.id",
        hours: "Senin - Jumat: 08:00 - 16:00 WIB",
      },
    },
    {
      id: 1,
      topic: "Customer Support 24/7",
      date: "2024-12-20 10:00:00",
      info: "Tim support kami siap membantu Anda 24 jam sehari, 7 hari seminggu. Dapatkan bantuan teknis, panduan penggunaan, dan solusi masalah dengan cepat.",
      details: {
        phone: "(+62) 21-7919-2578",
        email: "support@plnes.co.id",
        hours: "24/7 - Setiap Hari",
      },
    },
    {
      id: 2,
      topic: "Technical Support",
      date: "2024-12-20 10:00:00",
      info: "Untuk masalah teknis, integrasi sistem, atau bantuan implementasi Smart Payment di perusahaan Anda. Tim teknis kami akan memberikan solusi terbaik.",
      details: {
        phone: "(+62) 21-7919-2579",
        email: "technical@plnes.co.id",
        hours: "Senin - Jumat: 08:00 - 17:00 WIB",
      },
    },
    {
      id: 3,
      topic: "Partnership & Business Inquiry",
      date: "2024-12-20 10:00:00",
      info: "Ingin menjadi mitra atau memiliki pertanyaan bisnis? Hubungi tim partnership kami untuk peluang kerjasama dan pengembangan bisnis.",
      details: {
        phone: "(+62) 21-7919-2580",
        email: "partnership@plnes.co.id",
        hours: "Senin - Jumat: 09:00 - 16:00 WIB",
      },
    },
  ];

  return (
    <div className="contact-section" ref={sectionRef}>
      <div className="section-title">
        <h2 className="script-title">Contact Us</h2>
        <h3 className="main-title">HUBUNGI KAMI</h3>
      </div>

      <div className="contact-content">
        <div className="contact-topics-column">
          <h4>
            <span className="contact-icon">📞</span>
            Kontak
          </h4>
          <ul className="contact-topics-list">
            {contactData.map((item, index) => (
              <li
                key={item.id}
                className={`contact-topic-item ${
                  activeContact === index ? "active" : ""
                } ${isVisible ? "animate-in" : ""}`}
                onClick={() => setActiveContact(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-topic-icon">
                  <img
                    src="/images/Logo_PLN-removebg-preview.png"
                    alt="PLN Icon"
                    className="contact-topic-icon-img"
                  />
                </div>
                <div className="contact-topic-content">
                  <div className="contact-topic-title">{item.topic}</div>
                  <div className="contact-topic-date">{item.date}</div>
                </div>
                <div className="contact-topic-arrow">
                  <span>→</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-info-column">
          <h4>
            <span className="info-icon">ℹ️</span>
            Informasi
          </h4>
          <div className="contact-info-content">
            <div
              className={`contact-info-card ${isVisible ? "animate-in" : ""}`}
            >
              <p className="contact-main-info">
                {contactData[activeContact].info}
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon">📞</div>
                  <div className="detail-content">
                    <span className="detail-label">Telepon</span>
                    <span className="detail-value">
                      {contactData[activeContact].details.phone}
                    </span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">✉️</div>
                  <div className="detail-content">
                    <span className="detail-label">Email</span>
                    <span className="detail-value">
                      {contactData[activeContact].details.email}
                    </span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">🕒</div>
                  <div className="detail-content">
                    <span className="detail-label">Jam Operasional</span>
                    <span className="detail-value">
                      {contactData[activeContact].details.hours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <button className="contact-action-btn primary">
                  <span className="btn-icon">📞</span>
                  Hubungi Sekarang
                </button>
                <button className="contact-action-btn secondary">
                  <span className="btn-icon">✉️</span>
                  Kirim Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="contact-background">
        <img
          src="/images/workers-control-room.jpg"
          alt="Contact Background"
          className="contact-bg-image"
        />
        <div className="contact-overlay"></div>
      </div>
    </div>
  );
};

export default ContactUsSection;
