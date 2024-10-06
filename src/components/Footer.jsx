import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="footer bg-light pt-5">
            <div className="container">
                <div className="row">
                <div className="col-lg-2">
                    <img src={require(`../assets/svg/logo.svg`)} alt="Unistacx Logo" className="footer-logo" />
                    <div className="row">
                        <div className="col-1 m-1 text-center"><a className="social-icons" href="https://www.instagram.com/unistacx/" target="_blank"  rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></div>
                        <div className="col-1 m-1 text-center"><a className="social-icons" href="https://www.instagram.com/unistacx/" target="_blank"  rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></div>
                        <div className="col-1 m-1 text-center"><a className="social-icons" href="https://www.instagram.com/unistacx/" target="_blank"  rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></div>
                        <div className="col-1 m-1 text-center"><a className="social-icons" href="https://www.instagram.com/unistacx/" target="_blank"  rel="noopener noreferrer"><i className="bi bi-twitter"></i></a></div>
                    </div>
                </div>
                
                <div className="col-lg-3">
                    <h4>Services</h4>
                    
                    <div className="mb-1"><Link className="footer-link" to="/web-application-development">Web Application Development</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/mobile-application-development">Mobile Application Development</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/enterprise-software-development">Enterprise Software Development</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/ecommerce-development">E-Commerce Development</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/uiux-design">UI/UX Design</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/branding-and-identity">Branding & Identity</Link></div>
                
                </div>
                <div className="col-lg-2">
                    <h4>Quick Links</h4>
                    <div className="mb-1"><Link className="footer-link" to="/">Home</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/who-we-are">About Us</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/our-approach">Our Approach</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/for-startups">For Startups</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/contact">Contact</Link></div>
                </div>
                <div className="col-lg-2">
                    <h4>Important Links</h4>
                    <div className="mb-1"><Link className="footer-link" to="/">Terms & Conditions</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/who-we-are">Privacy Policy</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/our-approach">Refund and cancellation</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/for-startups">Ship & Delivery</Link></div>
                    <div className="mb-1"><Link className="footer-link" to="/contact">Contact</Link></div>
                </div>
                <div className="col-lg-3">
                    <h4>Contact Us</h4>
                    <p className="footer-link">Rajahmundry, East-Godavari,<br/> Andhra Pradesh, <br/>India - 533 102</p>
                    <p className="footer-link">Email: hello@unistacx.com</p>
                    <p className="footer-link">Phone: (+91) 88853 18863</p>
                </div>
                </div>
            </div>
            <hr/>
            <div className="bottom-bar">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <p className="text-center fs-6">&copy; 2024 UNISTACX TECHNOLOGIES PVT LTD. All rights reserved.</p>
                    </div>
                </div>
                </div>
            </div>
        </footer>

    );
}