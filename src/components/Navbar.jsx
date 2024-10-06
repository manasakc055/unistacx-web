import React, { useState } from "react";
import openModal from "./openModal";
import "../App.css";
import { Link, NavLink, useLocation } from "react-router-dom";
export default function Navbar() {
const [color, setColor] = useState(false);
function changeColor() {
if (window.scrollY >= 70) {
setColor(true);
} else {
setColor(false);
}
}
window.addEventListener("scroll", changeColor);
var path = useLocation().pathname;
if (path === "/") {
path = "Home";
} else {
path = path.split("-");
path = path.join(" ");
path = path.replace("/", "");
}

return (
<div className={`navbar toggle nav-1 navbar-expand-lg sticky-top ${ path !=="Home" && "bg-white no-bg" } ${color ? "nav-dark"
  : "" }`}>
  <link rel="stylesheet" href={`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css`} />
  <div className="container d-flex justify-content-between align-items-center">
    <a className="navbar-brand" href="/">
      <img id="logo" src={require(`../assets/svg/logo.svg`)} alt="Logo" />
    </a>
    <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      varia-controls="offcanvasNavbar">
      <h1>
        <i className="bi bi-list"></i>
      </h1>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Menu
        </h5>
        <button type="button" className="navbar-close" data-bs-dismiss="offcanvas" aria-label="Close">
          <h1>
            <i className="bi bi-x-lg"></i>
          </h1>
        </button>
      </div>
      <div className="offcanvas-body position-relative d-md-flex justify-content-evenly">
        <ul className="navbar-nav d-flex align-md-items-center  justify-content-evenly">
          <li className="nav-item me-3" data-bs-dismiss="offcanvas">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item me-3" data-bs-dismiss="offcanvas">
            <NavLink className="nav-link" to="/who-we-are">
              Who we are
            </NavLink>
          </li>
          <li className="nav-item dropdown me-3">
            <NavLink className="nav-link dropdown-toggle" to="/Services" style={({ isActive })=> {
              return { color: isActive ? "purple" : "" };
              }}
              href="#lm"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >
              Services
            </NavLink>
            <ul data-bs-dismiss="offcanvas" className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/web-application-development">
                Web App Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/mobile-application-development">
                Mobile App Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/enterprise-software-development">
                Enterprise Software Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/ecommerce-development">
                E-Commerce Development
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/uiux-design">
                UI/UX Design
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/branding-and-identity">
                Branding & Identity
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item me-3" data-bs-dismiss="offcanvas">
            <NavLink className="nav-link" to="/our-approach">
              Our Approach
            </NavLink>
          </li>
          <li className="nav-item me-3" data-bs-dismiss="offcanvas">
            <NavLink className="nav-link" to="/for-startups">
              For Startups
            </NavLink>
          </li>
          <li className="nav-item me-3" data-bs-dismiss="offcanvas">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          
        </ul>
        <div data-bs-dismiss="offcanvas">
              <Link onClick={openModal} className="btn btn-cta" type="submit">
              <i className="bi bi-chat-dots-fill"></i> Get a quote
              </Link>
              </div>
      </div>
    </div>
    
  </div>
</div>
);
}