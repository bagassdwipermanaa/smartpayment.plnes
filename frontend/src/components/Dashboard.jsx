import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!userData || !token) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(userData));
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Dashboard Smart Payment</h1>
          <p>Selamat datang, {user?.nama || "User"}!</p>
        </div>

        <div className="dashboard-content">
          <div className="user-info-card">
            <h2>Informasi User</h2>
            <div className="user-details">
              <div className="detail-row">
                <span className="label">Nama:</span>
                <span className="value">{user?.nama}</span>
              </div>
              <div className="detail-row">
                <span className="label">Username:</span>
                <span className="value">{user?.username}</span>
              </div>
              <div className="detail-row">
                <span className="label">Email:</span>
                <span className="value">{user?.email}</span>
              </div>
              <div className="detail-row">
                <span className="label">Jabatan:</span>
                <span className="value">{user?.jabatan}</span>
              </div>
              <div className="detail-row">
                <span className="label">Divisi:</span>
                <span className="value">{user?.divisi}</span>
              </div>
              <div className="detail-row">
                <span className="label">Region:</span>
                <span className="value">{user?.region}</span>
              </div>
              <div className="detail-row">
                <span className="label">Unit Layanan:</span>
                <span className="value">{user?.unitLayanan}</span>
              </div>
            </div>
          </div>

          <div className="dashboard-actions">
            <button className="action-button primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Kelola Tagihan
            </button>
            <button className="action-button secondary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              Kelola User
            </button>
            <button className="action-button secondary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
              Laporan
            </button>
            <button className="action-button danger" onClick={handleLogout}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16,17 21,12 16,7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
