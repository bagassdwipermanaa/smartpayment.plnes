import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact-section">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <p>Kantor Pusat PT PLN Electricity Services,</p>
            <p>Gedung 19 PT PLN (Persero) Pusat Sertifikasi</p>
            <p>Jl. Laboratorium No.1, Duren Tiga, Pancoran,</p>
            <p>Jakarta Selatan 12760.</p>
            <p className="phone">(+62) 21-7919-2577</p>
            <p className="email">smartpayment@plnes.co.id</p>
          </div>
        </div>

        <div className="certification-section">
          <h3>SERTIFIKASI</h3>
          <div className="certification-info">
            <div className="iso-badge">
              <span className="iso-number">ISO 37001</span>
              <span className="iso-title">SISTEM MANAJEMEN ANTI PENYUAPAN</span>
              <span className="iso-code">[SMAP]</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2023 All rights reserved by PT PLN Electricity Services</p>
      </div>
    </footer>
  );
};

export default Footer;
