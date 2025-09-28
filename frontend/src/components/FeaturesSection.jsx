import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast Processing",
      description:
        "Experience blazing-fast payment processing with our advanced infrastructure that handles millions of transactions per second.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      iconBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: "🔒",
      title: "Bank-Grade Security",
      description:
        "Your transactions are protected with military-grade encryption and advanced fraud detection systems that keep your money safe.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      iconBg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description:
        "Accept payments from anywhere in the world with our comprehensive global payment network and multi-currency support.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      iconBg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header" data-aos="fade-up">
          <h2 className="features-main-title">
            Why Choose <span className="gradient-text">Smart Payment</span>?
          </h2>
          <p className="features-subtitle">
            Revolutionizing the way businesses handle payments with cutting-edge
            technology
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                "--gradient": feature.gradient,
                "--icon-bg": feature.iconBg,
              }}
              data-aos="fade-up"
              data-aos-delay={200 + index * 200}
            >
              <div className="feature-card-inner">
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="feature-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
