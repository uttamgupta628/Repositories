import React from "react";
import { FcPieChart } from "react-icons/fc";
import { FaArrowUp } from "react-icons/fa";

const SelfHosted = ({ onNavigate }) => {
  return (
    <div className="main_container">
    <div className="mainLoginfirst">
            <div className="Loginfirst">
              <p className="headingLogin">AI to Detect & Autofix Bad Code</p>
              <hr />
              <div>
                <div className="view">
                  <div className="views">30+</div>
                  <div className="detail">Language Support</div>
                </div>
                <div className="view">
                  <div className="views">10K+</div>
                  <div className="detail">Developers</div>
                </div>
                <div className="view">
                  <div className="views">100K+</div>
                  <div className="detail">Hours Saved</div>
                </div>
              </div>
            </div>
            <div className="graph-container">
              <div className="week">
                <FcPieChart className="pie-chart-icon" />
                <div className="percentage">
                  <FaArrowUp /> 14%
                </div>
                <div className="this-week">This Week</div>
              </div>
              <div className="issues-container">
                <div className="issues-fixed">Issues Fixed</div>
                <div className="issues-count">500K+</div>
              </div>
            </div>
          </div>
    <div className="selfhosted">
    <div className="self-hosted-container">
      <h1 className="title">Welcome to CodeAnt AI</h1>
      <div className="tab-container">
        <button className="tab" onClick={() => onNavigate("SAAS")}>
          SAAS
        </button>
        <button className="tab active">Self Hosted</button>
      </div>
      <div className="button-container">
        <button className="login-button">
          <span className="icon gitlab-icon"></span> Self Hosted GitLab
        </button>
        <button className="login-button">
          <span className="icon sso-icon"></span> Sign in with SSO
        </button>
      </div>
    <p className="footer">
              By signing up you agree to the <a href="/privacy">Privacy Policy</a>.
            </p>
            <button
              className="btn_nextpage"
              onClick={() => onNavigate("Repo")} 
            >
              Go to Repositories
            </button>
    </div>
    </div>
    </div>
  );
};

export default SelfHosted;
