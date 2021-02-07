import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const OrderBottom = ({ totalPrice: { totalPriceOfOrders } }) => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const handleOnCheckoutClick = () => {
    console.log(user === null);
    if (user) {
      history.push("/checkout");
    } else {
      history.push("/login");
    }
  };

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
            onClick={handleOnCheckoutClick}
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
