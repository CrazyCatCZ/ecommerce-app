import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container">
          <Link className="navbar-brand waves-effect" to="/">
            <strong className="blue-text">E-commerce</strong>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link waves-effect" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <Link to="/order-summary" className="nav-link waves-effect">
                  <span className="badge red z-depth-1 mr-1">0</span>
                  <i className="fas fa-shopping-cart"></i>
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Cart{" "}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link waves-effect" to="/">
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Logout{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
