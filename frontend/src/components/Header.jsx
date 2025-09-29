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
            src="/images/logoplnes-removebg-preview.png"
            alt="PLN Logo"
            style={{
              width: isScrolled ? "350px" : "500px",
              height: isScrolled ? "80px" : "110px",
              objectFit: "contain",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: "none",
              zIndex: 15,
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
            <a href="#signin">SIGN IN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
