import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        data-aos="fade-down"
      >
        <div className="nav-brand">
          <img
            src="/images/PLNES_logo.png"
            alt="PLN Logo"
            style={{
              width: isScrolled ? "150px" : "300px",
              height: isScrolled ? "110px" : "140px",
              objectFit: "contain",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: "none",
              zIndex: 15,
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>

        <ul className="nav-links">
          <li data-aos="fade-down" data-aos-delay="100">
            <Link to="/">HOME</Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="200">
            <Link to="/register">REGISTER</Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="300">
            <a href="#petunjuk">PETUNJUK</a>
          </li>
          <li data-aos="fade-down" data-aos-delay="400">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="500">
            <Link to="/login">SIGN IN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
