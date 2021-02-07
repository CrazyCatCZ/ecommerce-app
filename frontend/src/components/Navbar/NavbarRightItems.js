import React from "react";
import { useMutation } from "@apollo/client";
import { USER_DELETE_TOKENS_MUTATION } from "../Api/user";
import { Link } from "react-router-dom";

const NavbarRightItems = ({ user, totalOrders: { totalOrders } }) => {
  const [deleteTokens] = useMutation(USER_DELETE_TOKENS_MUTATION);

  const handleOnLogout = async () => {
    await deleteTokens();
    window.location.reload(); // Reset page
  };

  console.log("test");
  console.log(user);

  return (
    <>
      <ul className="navbar-nav nav-flex-icons">
        <li className="nav-item">
          <Link to="/order-summary" className="nav-link waves-effect">
            {totalOrders !== 0 ? (
              <span className="badge red z-depth-1 mr-1">{totalOrders}</span>
            ) : null}
            <i className="fas fa-shopping-cart" />
            <span className="clearfix d-none d-sm-inline-block"> Cart </span>
          </Link>
        </li>
        {user ? (
          <li className="nav-item">
            <Link className="nav-link waves-effect">
              <span
                onClick={handleOnLogout}
                className="clearfix d-none d-sm-inline-block"
              >
                Logout
              </span>
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link waves-effect">
                <span className="clearfix d-none d-sm-inline-block">Login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link waves-effect">
                <span className="clearfix d-none d-sm-inline-block">
                  Register
                </span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default NavbarRightItems;
