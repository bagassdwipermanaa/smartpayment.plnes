import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className={`home-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="home-navbar">
        <div className="nav-brand">
          <img
            src="/images/PLNES_logo.png"
            alt="PLN Logo"
            className="nav-logo"
          />
        </div>

        <nav className="nav-menu">
          <ul className="nav-links">
            <li>
              <a href="/home" className="nav-link active">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-icon"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="9,22 9,12 15,12 15,22"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                DASHBOARD
              </a>
            </li>
            <li>
              <a href="/tagihan" className="nav-link">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-icon"
                >
                  <path
                    d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="14,2 14,8 20,8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="13"
                    x2="8"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="8"
                    y2="17"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="10,9 9,9 8,9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                TAGIHAN
              </a>
            </li>
            <li>
              <a href="/approval" className="nav-link">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-icon"
                >
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                APPROVAL
                <span className="badge">3</span>
              </a>
            </li>
            <li>
              <a href="/data-master" className="nav-link">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-icon"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                DATA MASTER
              </a>
            </li>
            <li>
              <a href="/laporan" className="nav-link">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-icon"
                >
                  <path d="M18 20V10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 20V4" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 20v-6" stroke="currentColor" strokeWidth="2" />
                </svg>
                LAPORAN
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-user">
          <div className="user-info">
            <div className="user-avatar">
              <span>{user?.nama?.charAt(0) || "A"}</span>
            </div>
            <div className="user-details">
              <span className="user-name">{user?.nama || "Admin Pusat"}</span>
              <span className="user-role">
                {user?.jabatan || "Super Admin"}
              </span>
            </div>
          </div>
          <div className="nav-actions">
            <button className="notification-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="nav-icon"
              >
                <path
                  d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M13.73 21a2 2 0 0 1-3.46 0"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="badge">5</span>
            </button>
            <div className="user-dropdown">
              <button className="dropdown-toggle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-icon"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="/profile" className="dropdown-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="nav-icon"
                  >
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Profile
                </a>
                <a href="/settings" className="dropdown-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="nav-icon"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Settings
                </a>
                <hr className="dropdown-divider" />
                <button onClick={handleLogout} className="dropdown-item logout">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="nav-icon"
                  >
                    <path
                      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="16,17 21,12 16,7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="21"
                      y1="12"
                      x2="9"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
