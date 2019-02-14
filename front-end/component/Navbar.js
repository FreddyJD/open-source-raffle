import React from "react";

const Navbar = (props) => (
  <>
    <div className="nav-container">
      <div className="via-1549988061167" via="via-1549988061167" vio="custom-nav">
        <nav className="bar bar-1 hidden-xs">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-left text-left-xs text-left-sm">
                <div className="bar__module">
                  <ul className="menu-horizontal text-left">
                    <li>
                      <a>🏡 Home </a>
                    </li>
                    <li>
                      <a>👨‍💻 API Docs</a>
                    </li>
                    <li>
                      <a>🚀 Active Raffles </a>
                    </li>
                    <li>
                      <a>✅ Github </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 text-right text-left-xs text-left-sm">
                <div className="bar__module">
                  <a className="btn btn--sm type--uppercase">
                    <span className="btn__text"> dashboard </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </>
);

export default Navbar; 