import React from "react";
import PropTypes from 'prop-types'; 
import Link from 'next/link';

const Navbar = ({ isLoggedIn }) => (
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
                      <Link href="/">
                      <a> Home </a> 
                      </Link>
                    </li>

                    <li>
                    <Link href="/raffles">
                      <a> Active Raffles </a> 
                      </Link>
                      </li>

                    <li>
                      <Link href="/docs">
                        <a> API Documentation</a> 
                      </Link>
                    </li>

                    <li>
                    <Link href="https://github.com/FreddyJD/open-source-raffle/fork">

                    <a>
                    🔥 Fork 
                    </a>
                    </Link>
                    </li>

                  
                    
                  </ul>
                </div>
              </div>
    
              <div className="col-md-6 text-right text-left-xs text-left-sm">
              
                <div className="bar__module">
                  { isLoggedIn ? ( 
                    <Link href="/dashboard">

                  <a className="btn btn--sm type--uppercase none__dec">
                      Dashboard
                  </a>

                  </Link> ) :
                   (<Link href="/login">
                  <a className="btn btn--sm type--uppercase">
                    <a className="none__dec">
                    Login
                    </a> 
                  </a>



                    </Link> 
                    ) }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

  </>
)


Navbar.prototype = { 
  isLoggedIn: PropTypes.bool
};

export default Navbar; 