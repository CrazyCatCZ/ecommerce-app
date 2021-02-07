import React from "react";
import { Link, useHistory } from "react-router-dom";

const OrderBottom = ({ totalPrice: { totalPriceOfOrders } }) => {
  const history = useHistory();

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
          <Link
            onClick={() => history.push("/checkout")}
            className="btn btn-warning float-right ml-2"
          >
            Proceed to checkout
          </Link>
          <Link to="/" className="btn btn-primary float-right">
            Continue shopping
          </Link>
        </td>
      </tr>
    </>
  );
};

export default OrderBottom;
