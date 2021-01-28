import React from "react";
import { useQuery } from "@apollo/client";
import { ORDER_USER_LIST_QUERY, ORDER_TOTAL_PRICE_QUERY } from "./Api/order";
import CheckoutItems from "./CheckoutItems";

const Checkout = () => {
  const { data: orders } = useQuery(ORDER_USER_LIST_QUERY);
  const { data: totalPrice } = useQuery(ORDER_TOTAL_PRICE_QUERY);

  console.log(orders);

  return (
    <>
      {orders && totalPrice ? (
        <div className="checkout-container">
          <div className="container wow fadeIn">
            <div className="row d-flex justify-content-center cart-container">
              <div className="col-md-4 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                  <span className="badge badge-secondary badge-pill">
                    {orders.userOrders.length}
                  </span>
                </h4>
                <ul className="list-group mb-3 z-depth-1">
                  {orders.userOrders.map(
                    ({ id, product: { title, category, price }, quantity }) => {
                      category = category.replace("_", " ");

                      return (
                        <CheckoutItems
                          key={id}
                          title={title}
                          category={category}
                          price={price}
                          quantity={quantity}
                        />
                      );
                    }
                  )}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${totalPrice.totalPriceOfOrders}</strong>
                  </li>
                </ul>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Continue to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Checkout;
