import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!userData || !token) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(userData));
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="home-loading">
        <div className="loading-spinner"></div>
        <p>Memuat halaman...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <HomeHeader />

      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-pattern"></div>
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 17l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span>Smart Payment System</span>
            </div>
            <h1 className="hero-title">
              Selamat Datang, <br />
              <span className="gradient-text">{user?.nama || "Admin"}</span>
            </h1>
            <p className="hero-subtitle">
              Kelola pembayaran vendor dengan sistem yang canggih, aman, dan
              efisien
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2.5M</span>
                <span className="stat-label">Total Transaksi</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Cards */}
        <section className="dashboard-section">
          <div className="dashboard-grid">
            <div className="dashboard-card revenue">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="card-trend positive">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  +12.5%
                </div>
              </div>
              <div className="card-content">
                <h3>Total Revenue</h3>
                <p className="card-value">Rp 2.5M</p>
                <span className="card-subtitle">Bulan ini</span>
              </div>
            </div>

            <div className="dashboard-card transactions">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="card-trend positive">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  +8.2%
                </div>
              </div>
              <div className="card-content">
                <h3>Transaksi Selesai</h3>
                <p className="card-value">1,247</p>
                <span className="card-subtitle">Bulan ini</span>
              </div>
            </div>

            <div className="dashboard-card pending">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="card-trend neutral">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  0%
                </div>
              </div>
              <div className="card-content">
                <h3>Menunggu Approval</h3>
                <p className="card-value">23</p>
                <span className="card-subtitle">Transaksi</span>
              </div>
            </div>

            <div className="dashboard-card vendors">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="card-trend positive">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  +3
                </div>
              </div>
              <div className="card-content">
                <h3>Vendor Aktif</h3>
                <p className="card-value">89</p>
                <span className="card-subtitle">Total</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="actions-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
            <p>Akses cepat ke fitur utama sistem</p>
          </div>
          <div className="actions-grid">
            <div className="action-card">
              <div className="action-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="action-content">
                <h3>Kelola Tagihan</h3>
                <p>Lihat dan kelola semua tagihan vendor</p>
                <button className="action-btn">
                  <span>Buka</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="action-card">
              <div className="action-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="action-content">
                <h3>Kelola User</h3>
                <p>Manajemen pengguna dan akses</p>
                <button className="action-btn">
                  <span>Buka</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="action-card">
              <div className="action-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="action-content">
                <h3>Laporan</h3>
                <p>Lihat laporan keuangan dan statistik</p>
                <button className="action-btn">
                  <span>Buka</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="action-card">
              <div className="action-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="action-content">
                <h3>Pengaturan</h3>
                <p>Konfigurasi sistem dan preferensi</p>
                <button className="action-btn">
                  <span>Buka</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="activity-section">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <p>Aktivitas terbaru dalam sistem</p>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="activity-content">
                <h4>Tagihan #INV-2024-001 telah dilunasi</h4>
                <p>PT ABC Construction - Rp 15.000.000</p>
                <span className="activity-time">2 jam yang lalu</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="activity-content">
                <h4>Tagihan baru ditambahkan</h4>
                <p>PT XYZ Engineering - Rp 8.500.000</p>
                <span className="activity-time">4 jam yang lalu</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon warning">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="activity-content">
                <h4>User baru terdaftar</h4>
                <p>John Doe - Admin Regional</p>
                <span className="activity-time">1 hari yang lalu</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
