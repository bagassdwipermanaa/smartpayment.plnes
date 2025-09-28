import React, { useState } from "react";

const NewsSection = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  const newsData = [
    {
      id: 0,
      topic: "Update perubahan email dan kontak",
      date: "2025-09-02 00:00:00",
      info: "Update perubahan email notifikasi dan korespodensi menjadi smartpayment@plnes.co.id serta perubahan nomor kontak kantor pusat PLN Electricity Services menjadi 021-7919-2517",
    },
    {
      id: 1,
      topic: "Libur Natal, 25-26 Desember",
      date: "2024-12-25 00:00:00",
      info: "Sesuai dengan Kalender Nasional, tanggal 25 sd 26 Desember 2024 sebagai Libur Natal",
    },
    {
      id: 2,
      topic: "Penagihan Via SmartPayment",
      date: "2024-11-21 20:08:08",
      info: "Mitra-Mitra penyedia Jasa dan Barang untuk Haleyora Power Pusat dan Unit Pelaksana 5 (UP5) dianjurkan mulai tanggal 20 November 2024 melakukan penagihan melalui Aplikasi Smart Payment",
    },
    {
      id: 3,
      topic: "Tata Tertib Penagihan",
      date: "2024-11-20 17:21:34",
      info: "Tata Tertib Penagihan:",
      rules: [
        "Submit Dokumen Tagihan dilayani selama jam kerja 08.00 sd 16.00 wib dalam hari kerja Senin sd Jum'at",
        "Mitra memastikan terlebih dahulu e-file sebelum melakukan submit tagihan",
        "Apabila terdapat koreksi tagihan, maka status posisi tagihan di aplikasi akan dikembalikan ke mitra dan perhitungan waktu proses verifikasi tagihan akan dimulai dari awal kembali",
        "Setiap Mitra wajib menjaga kerahasiaan data dan akses didalam Aplikasi Smart Payment.",
        "Segala bentuk kerugian akibat penyalahgunaan akses, menjadi tanggung jawab Mitra",
      ],
    },
  ];

  return (
    <div className="news-section">
      <div className="section-title">
        <h2 className="script-title">Latest News</h2>
        <h3 className="main-title">INFORMASI PENAGIHAN</h3>
      </div>

      <div className="news-content">
        <div className="topics-column">
          <h4>Topik</h4>
          <ul className="topics-list">
            {newsData.map((item, index) => (
              <li
                key={item.id}
                className={`topic-item ${
                  activeTopic === index ? "active" : ""
                }`}
                onClick={() => setActiveTopic(index)}
              >
                <div className="topic-icon">
                  <img
                    src="/images/Logo_PLN-removebg-preview.png"
                    alt="PLN Icon"
                    className="topic-icon-img"
                  />
                </div>
                <div className="topic-content">
                  <div className="topic-title">{item.topic}</div>
                  <div className="topic-date">{item.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="info-column">
          <h4>Informasi</h4>
          <div className="info-content">
            <p>{newsData[activeTopic].info}</p>
            {newsData[activeTopic].rules && (
              <ol className="rules-list">
                {newsData[activeTopic].rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
