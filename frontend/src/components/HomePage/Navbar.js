import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div class="container">
          <a class="navbar-brand waves-effect" href="/">
            <strong class="blue-text">E-commerce</strong>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link waves-effect" href="/">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>

            <ul class="navbar-nav nav-flex-icons">
              <li class="nav-item">
                <a href="/" class="nav-link waves-effect">
                  <span class="badge red z-depth-1 mr-1">0</span>
                  <i class="fas fa-shopping-cart"></i>
                  <span class="clearfix d-none d-sm-inline-block"> Cart </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="/">
                  <span class="clearfix d-none d-sm-inline-block">
                    {" "}
                    Logout{" "}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="/">
                  <span class="clearfix d-none d-sm-inline-block"> Login </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" href="/">
                  <span class="clearfix d-none d-sm-inline-block">
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
