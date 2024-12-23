import React from "react";
import { FcPieChart } from "react-icons/fc";
import { FaArrowUp } from "react-icons/fa";
import { FaGithub, FaGitlab, FaBitbucket, FaMicrosoft } from "react-icons/fa";

const Login = ({ onNavigate }) => {
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
      <div className="login-first-container">
        <div className="login-container">
          <h1 className="title">Welcome to CodeAnt AI</h1>
          <div className="tab-container">
            <div className="tab active">SAAS</div>
            <div className="tab" onClick={() => onNavigate("SelfHosted")}>
              Self Hosted
            </div>
          </div>
          <div>
            <div className="button-container">
              <button className="login-button">
                <FaGithub className="icon" />
                Sign in with Github
              </button>
              <button className="login-button">
                <FaBitbucket className="icon" />
                Sign in with Bitbucket
              </button>
              <button className="login-button">
                <FaMicrosoft className="icon" />
                Sign in with Azure DevOps
              </button>
              <button className="login-button">
                <FaGitlab className="icon" />
                Sign in with GitLab
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
    </div>
  );
};

export default Login;
