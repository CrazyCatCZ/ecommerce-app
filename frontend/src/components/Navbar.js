import React from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { USER_DELETE_TOKENS_MUTATION } from "./Api/user";

const Navbar = () => {
  const [deleteTokens] = useMutation(USER_DELETE_TOKENS_MUTATION);

  const handleOnLogout = async () => {
    await deleteTokens();
    window.location.reload(); // Reset page
  };

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
                  <span
                    onClick={handleOnLogout}
                    className="clearfix d-none d-sm-inline-block"
                  >
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
