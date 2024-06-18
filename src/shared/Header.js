import React from "react";

const Header = () => {
    return (
      <main>
        <div className="nav-section">
            <nav className="nav-container">
                <span className="nav-logo-background">
                <a href="index.html"><img src="/images/Practice-Time-Logo.png" alt="practice time logo: a black letter 'p' over a black letter 't'" className="nav-logo-img" style={{width: "180px"}}/></a>
                </span>
                <div className="nav-menu-container">
                    <ul className="nav-menu-list nav-link-styling">
                        <li className="nav-horizontal-menu"><a href="index.html">HOME</a></li>
                        <li className="nav-horizontal-menu"><a href="create-account.html">CREATE ACCOUNT</a></li>
                        <li className="nav-horizontal-menu"><a href="login.html">LOGIN</a></li>
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i>  
                </div>
            </nav>
        </div>
      </main>
    )
  }

export default Header;