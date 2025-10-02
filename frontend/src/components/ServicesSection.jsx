import React, { useState } from "react";

const ServicesSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-medium text-blue-800 mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            FAQ
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Sering Diajukan
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
            tentang pengelolaan pembayaran vendor di Smart Payment
          </p>
        </div>

        {/* FAQ Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h4 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h4>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold transition-transform duration-300 ${
                    activeFaq === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih ada pertanyaan?
            </h3>
            <p className="text-gray-600 mb-6">
              Tim support kami siap membantu Anda 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Live Chat
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
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
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
