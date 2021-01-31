import React from "react";
import CheckoutOrder from "./CheckoutOrder";

const SubCheckout = ({
  orders: { userOrders },
  totalPrice: { totalPriceOfOrders },
  openModal,
}) => {
  return (
    <div className="checkout-container">
      <div className="container wow fadeIn">
        <div className="row d-flex justify-content-center cart-container">
          <div className="col-md-4 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">
                {userOrders.length}
              </span>
            </h4>
            <ul className="list-group mb-3 z-depth-1">
              {userOrders.map(
                ({ id, product: { title, category, price }, quantity }) => {
                  category = category.replace("_", " ");

                  return (
                    <CheckoutOrder
                      key={id}
                      title={title}
                      category={category}
                      price={price}
                      quantity={quantity}
                      openModal={openModal}
                    />
                  );
                }
              )}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${totalPriceOfOrders}</strong>
              </li>
            </ul>
            <button
              onClick={openModal}
              disabled={userOrders.length === 0 ? true : false}
              className="btn btn-primary btn-lg btn-block"
              type="submit"
            >
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCheckout;
