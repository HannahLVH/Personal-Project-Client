import React from "react";
import "./Footer.css"
import "../components/mediaQueries.css"

const Footer = () => {
    return (
      <main>
        <div className="footer-section">
            <div className="footer-container">
                <footer className="footer-menu-container footer-text-styling">
                    <div className="footer-menu">
                        <div className="footer-link-styling">
                            <h3>LINKS</h3>
                            <a href="/">Home</a><br/>
                            <a href="/signup">Join</a><br/>
                            <a href="/login">Login</a>
                        </div>
                        {/* <div className="footer-link-styling">
                            <h3>FOLLOW US</h3>
                            <span className="footer-socials">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </span>
                        </div> */}
                        <div className="product-container hlv-logo-link-styling">
                            <span className="product">
                            <h3>A PRODUCT OF</h3>
                            </span>
                            <a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/Hannah-Lovez-logo.png" alt="hannah lovez violin logo: a stamp of a violin inside a circle" className="footer-hannah-lovez-logo" style={{width: "180px"}}/></a>
                        </div>       
                    </div>
                    <br/>
                    <div className="contact"><span>Contact: hannahlopez.violin@gmail.com </span></div>
                </footer>
            </div>
        </div>
      </main>
    )
  }

export default Footer;