import React from "react";

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
                <th scope="row">10</th>
                <td>20</td>
                <td>10</td>
                <td>
                  <a href="/">
                    <i className="fas fa-minus mr-2"></i>
                  </a>
                  3
                  <a href="/">
                    <i className="fas fa-plus ml-2"></i>
                  </a>
                </td>
                <td>
                  $10
                  <a style={{ color: "red" }} href="/">
                    <i className="fas fa-trash float-right"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="5">Your cart is empty</td>
              </tr>

              <tr>
                <td colspan="4">
                  <b>Order Total</b>
                </td>
                <td>
                  <b>10</b>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <a
                    className="btn btn-warning float-right ml-2"
                    href="/checkout/"
                  >
                    Proceed to checkout
                  </a>
                  <a className="btn btn-primary float-right" href="/">
                    Continue shopping
                  </a>
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
