import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { ORDER_TOTAl_ORDERS_QUERY } from "../Api/order";
import NavbarRightItems from "./NavbarRightItems";

const Navbar = () => {
  const { data: totalOrders } = useQuery(ORDER_TOTAl_ORDERS_QUERY);

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

            {totalOrders ? (
              <NavbarRightItems totalOrders={totalOrders} />
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
