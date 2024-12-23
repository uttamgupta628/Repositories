import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaCode,
  FaCloud,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaPlus,
  FaBars,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";

const Repo = () => {
  const repositories = [
    { name: "design-system", type: "React", size: "7,320 KB", updated: "1 day ago", visibility: "Public" },
    { name: "codeant-ci-app", type: "JavaScript", size: "5,971 KB", updated: "2 days ago", visibility: "Private" },
    { name: "analytics-dashboard", type: "Python", size: "4,521 KB", updated: "5 days ago", visibility: "Private" },
    { name: "mobile-app", type: "Swift", size: "3,086 KB", updated: "3 days ago", visibility: "Private" },
    { name: "e-commerce-platform", type: "Java", size: "6,210 KB", updated: "6 days ago", visibility: "Private" },
    { name: "blog-website", type: "HTML/CSS", size: "1,976 KB", updated: "4 days ago", visibility: "Public" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);

      if (isMobileView) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="repo-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">CodeAnt AI</h2>
        <ul className="sidebar-menu">
          <li className="menu-item">
            <FaHome /> Repositories
          </li>
          <li className="menu-item">
            <FaCode /> AI Code Review
          </li>
          <li className="menu-item">
            <FaCloud /> Cloud Security
          </li>
          <li className="menu-item">
            <FaQuestionCircle /> How to Use
          </li>
          <li className="menu-item">
            <FaCog /> Settings
          </li>
          <li className="menu-item logout">
            <BsTelephone /> Support
          </li>
          <li className="menu-item logout">
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      {isMobile && <FaBars className="hamburger" onClick={toggleSidebar} />}

      {/* Overlay for Mobile */}
      {isMobile && isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h2>Repositories</h2>
          <div className="header-actions">
            <div className="search-bar">
              <FaSearch />
              <HiOutlineRefresh className="placeholder-icon" />
              <button className="refresh-btn">Refresh All</button>
            </div>
            <button className="add-repo-button">
              <FaPlus /> Add Repository
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Repositories"
            className="search-input"
          />
        </div>

        {/* Repository List */}
        <div className="repository-list">
          {repositories.map((repo, index) => (
            <div key={index} className="repository-card">
              <div className="repo-info">
                <h3>{repo.name}</h3>
                <p>
                  {repo.type} • {repo.visibility}
                </p>
              </div>
              <div className="repo-stats">
                <span>{repo.size}</span>
                <span>Updated {repo.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repo;
