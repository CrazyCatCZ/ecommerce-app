import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="order-summary-container">
      <div className="container">
        <div className="table- responsive text-nowrap">
          <h2>Order Summary</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Item Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>20</td>
                <td>10</td>
                <td>
                  <i className="fas fa-minus mr-2"></i>3
                  <i className="fas fa-plus ml-2"></i>
                </td>
                <td>
                  $10
                  <Link style={{ color: "red" }} to="/">
                    <i className="fas fa-trash float-right"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td colSpan="5">Your cart is empty</td>
              </tr>

              <tr>
                <td colSpan="4">
                  <b>Order Total</b>
                </td>
                <td>
                  <b>10$</b>
                </td>
              </tr>
              <tr>
                <td colSpan="5">
                  <Link
                    className="btn btn-warning float-right ml-2"
                    to="/checkout"
                  >
                    Proceed to checkout
                  </Link>
                  <Link className="btn btn-primary float-right" to="/">
                    Continue shopping
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
