import React, { useState } from "react";
import Login from "./Component/Login";
import SelfHosted from "./Component/SelfHosted";
import Repo from "./Component/Repo";
import './App.css';

function App() {
  const [activePage, setActivePage] = useState("SAAS");

  const navigateTo = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app-container">
      {activePage === "SAAS" && <Login onNavigate={navigateTo} />}
      {activePage === "SelfHosted" && <SelfHosted onNavigate={navigateTo} />}
      {activePage === "Repo" && <Repo />}
    </div>
  );
}

export default App;
