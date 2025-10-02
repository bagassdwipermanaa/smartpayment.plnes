import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium mb-8">
            <span className="mr-2">⚡</span>
            Solusi Pembayaran Vendor Terdepan
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Payment
            <br />
            <span className="text-blue-200">PLN Electricity Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kelola pembayaran tagihan vendor dengan mudah, cepat, dan aman.
            Platform digital terpercaya untuk semua kebutuhan pembayaran Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Mulai Sekarang
            </Link>
            <Link
              to="/login"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
