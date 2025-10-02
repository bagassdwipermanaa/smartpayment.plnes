import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const ContactUsSection = () => {
  const [activeContact, setActiveContact] = useState(0);

  const contactData = [
    {
      id: 0,
      topic: "Kantor Pusat",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      info: "Gedung 19 PT PLN (Persero) Pusat Sertifikasi, Jl. Laboratorium No.1, Duren Tiga, Pancoran, Jakarta Selatan 12760. Hubungi kami untuk informasi lebih lanjut tentang layanan Smart Payment.",
      details: {
        phone: "(+62) 21-7919-2577",
        email: "smartpayment@plnes.co.id",
        hours: "Senin - Jumat: 08:00 - 16:00 WIB",
      },
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 1,
      topic: "Customer Support 24/7",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
          />
        </svg>
      ),
      info: "Tim support kami siap membantu Anda 24 jam sehari, 7 hari seminggu. Dapatkan bantuan teknis, panduan penggunaan, dan solusi masalah dengan cepat.",
      details: {
        phone: "(+62) 21-7919-2578",
        email: "support@plnes.co.id",
        hours: "24/7 - Setiap Hari",
      },
      color: "from-emerald-500 to-green-500",
    },
    {
      id: 2,
      topic: "Technical Support",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      info: "Untuk masalah teknis, integrasi sistem, atau bantuan implementasi Smart Payment di perusahaan Anda. Tim teknis kami akan memberikan solusi terbaik.",
      details: {
        phone: "(+62) 21-7919-2579",
        email: "technical@plnes.co.id",
        hours: "Senin - Jumat: 08:00 - 17:00 WIB",
      },
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      topic: "Partnership & Business",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      info: "Ingin menjadi mitra atau memiliki pertanyaan bisnis? Hubungi tim partnership kami untuk peluang kerjasama dan pengembangan bisnis.",
      details: {
        phone: "(+62) 21-7919-2580",
        email: "partnership@plnes.co.id",
        hours: "Senin - Jumat: 09:00 - 16:00 WIB",
      },
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/workers-control-room.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-20 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <img
                  src="/images/PLNES_logo.png"
                  alt="PLN Logo"
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hubungi Kami
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Tim kami siap membantu Anda dengan layanan terbaik
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Options */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Pilih Layanan
                </h3>
                <div className="space-y-3">
                  {contactData.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveContact(index)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                        activeContact === index
                          ? "bg-white/20 border-blue-400 shadow-lg"
                          : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white mr-3 flex-shrink-0`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">
                            {item.topic}
                          </div>
                          <div className="text-slate-400 text-xs">
                            Klik untuk detail
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contactData[activeContact].color} flex items-center justify-center text-white mr-4`}
                    >
                      {contactData[activeContact].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {contactData[activeContact].topic}
                    </h3>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-8">
                    {contactData[activeContact].info}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Phone */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-5 h-5 text-blue-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-slate-400">
                          Telepon
                        </span>
                      </div>
                      <p className="text-white font-semibold">
                        {contactData[activeContact].details.phone}
                      </p>
                    </div>

                    {/* Email */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-5 h-5 text-blue-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-slate-400">
                          Email
                        </span>
                      </div>
                      <p className="text-white font-semibold">
                        {contactData[activeContact].details.email}
                      </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-5 h-5 text-blue-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-slate-400">
                          Jam Operasional
                        </span>
                      </div>
                      <p className="text-white font-semibold">
                        {contactData[activeContact].details.hours}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`tel:${contactData[activeContact].details.phone}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Hubungi Sekarang
                    </a>

                    <a
                      href={`mailto:${contactData[activeContact].details.email}`}
                      className="flex-1 border-2 border-white/30 text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Kirim Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Informasi Tambahan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300">Respon Cepat</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300">Data Terlindungi</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300">Layanan Profesional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
