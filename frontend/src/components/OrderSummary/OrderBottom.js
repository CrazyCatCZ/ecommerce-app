import React from "react";
import { Link } from "react-router-dom";

const OrderBottom = ({ totalPrice: { totalPriceOfOrders } }) => {
  return (
    <>
      <tr>
        <td colSpan="4">
          <b>Order Total</b>
        </td>
        <td>
          <b>${totalPriceOfOrders}</b>
        </td>
      </tr>
      <tr>
        <td colSpan="5">
          <Link className="btn btn-warning float-right ml-2" to="/checkout">
            Proceed to checkout
          </Link>
          <Link className="btn btn-primary float-right" to="/">
            Continue shopping
          </Link>
        </td>
      </tr>
    </>
  );
};

export default OrderBottom;
