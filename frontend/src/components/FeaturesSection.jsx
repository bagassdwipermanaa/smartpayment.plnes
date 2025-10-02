import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "💳",
      title: "Pembayaran Mudah",
      description:
        "Proses pembayaran yang simpel dan user-friendly untuk semua vendor.",
    },
    {
      icon: "🔒",
      title: "Keamanan Terjamin",
      description:
        "Sistem keamanan berlapis untuk melindungi data dan transaksi Anda.",
    },
    {
      icon: "⚡",
      title: "Proses Cepat",
      description: "Transaksi diproses dengan cepat untuk efisiensi maksimal.",
    },
    {
      icon: "📊",
      title: "Laporan Real-time",
      description: "Dashboard dan laporan yang memberikan insight mendalam.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Smart Payment?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform pembayaran yang dirancang khusus untuk memenuhi kebutuhan
            vendor PLN
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
