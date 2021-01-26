import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container">
          <a className="navbar-brand waves-effect" href="/">
            <strong className="blue-text">E-commerce</strong>
          </a>

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
              <li className="nav-item active">
                <a className="nav-link waves-effect" href="/">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a href="/" className="nav-link waves-effect">
                  <span className="badge red z-depth-1 mr-1">0</span>
                  <i className="fas fa-shopping-cart"></i>
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Cart{" "}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect" href="/">
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Logout{" "}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect" href="/">
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Login{" "}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect" href="/">
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Signup{" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
