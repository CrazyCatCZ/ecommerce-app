import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <tr>
        <td colSpan="5">
          <h6 className="d-flex align-items-center">Your cart is empty</h6>
        </td>
      </tr>
      <tr>
        <td colSpan="5">
          <Link className="btn btn-primary float-right" to="/">
            Continue shopping
          </Link>
        </td>
      </tr>
    </>
  );
};

export default EmptyCart;
