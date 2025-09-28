import React, { useState, useEffect } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Digital Payment Solutions",
      description:
        "Revolutionary digital payment systems with AI-powered security and seamless blockchain integration for the future of finance.",
      image:
        "/images/smart-asian-male-professional-civil-engineer-hand-hold-laptop-site-construction-check-with-infastrcture-building-background.jpg",
      features: [
        "AI-powered fraud detection",
        "Blockchain integration",
        "Real-time analytics",
        "Multi-currency support",
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "💳",
    },
    {
      id: 1,
      title: "Mobile Payment Innovation",
      description:
        "Next-generation mobile payment solutions with biometric authentication and IoT connectivity for smart business operations.",
      image: "/images/workers-control-room.jpg",
      features: [
        "Biometric security",
        "IoT integration",
        "Offline processing",
        "Smart notifications",
      ],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "📱",
    },
    {
      id: 2,
      title: "Cloud Payment Infrastructure",
      description:
        "Enterprise-grade cloud infrastructure with quantum encryption and global edge computing for maximum performance and security.",
      image:
        "/images/young-asian-technician-man-colleague-safety-uniform-checking-operation-sun-photovoltaic-solar-panel-use-laptop-computer-while-working-solar-farm (1).jpg",
      features: [
        "Quantum encryption",
        "Global edge computing",
        "99.99% uptime",
        "Auto-scaling AI",
      ],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: "☁️",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="services-main-title">
            Our <span className="gradient-text">Advanced</span> Payment Services
          </h2>
          <p className="services-subtitle">
            Experience the future of payments with our cutting-edge technology
            solutions
          </p>
        </div>

        <div className="services-main-content">
          <div
            className="services-text"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="service-indicator">
              <span className="indicator-text">
                Service {activeService + 1} of {services.length}
              </span>
              <div className="indicator-dots">
                {services.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${activeService === index ? "active" : ""}`}
                    onClick={() => setActiveService(index)}
                  />
                ))}
              </div>
            </div>

            <h3 className="services-title">{services[activeService].title}</h3>
            <p className="services-description">
              {services[activeService].description}
            </p>

            <div className="services-features">
              {services[activeService].features.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay={400 + idx * 100}
                >
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>

            <div className="services-navigation">
              <button
                className="nav-btn prev"
                onClick={() => setActiveService(Math.max(0, activeService - 1))}
              >
                <span>←</span>
              </button>
              <button
                className="nav-btn next"
                onClick={() =>
                  setActiveService(
                    Math.min(services.length - 1, activeService + 1)
                  )
                }
              >
                <span>→</span>
              </button>
            </div>
          </div>

          <div
            className="services-visual"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="service-image-container">
              <div className="service-image-wrapper">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`service-image-card ${
                      activeService === index ? "active" : ""
                    }`}
                  >
                    <img src={service.image} alt={service.title} />
                    <div className="service-overlay">
                      <div className="service-icon">
                        <span>{service.icon}</span>
                      </div>
                      <h4 className="service-title">{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
