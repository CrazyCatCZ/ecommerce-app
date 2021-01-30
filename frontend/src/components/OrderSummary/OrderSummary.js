import React from "react";
import { useQuery } from "@apollo/client";
import { ORDER_USER_LIST_QUERY, ORDER_TOTAL_PRICE_QUERY } from "../Api/order";
import ItemOrder from "./ItemOrder";
import EmptyCart from "./EmptyCart";
import OrderBottom from "./OrderBottom";

const OrderSummary = () => {
  const { data: orders } = useQuery(ORDER_USER_LIST_QUERY);
  const { data: totalPrice } = useQuery(ORDER_TOTAL_PRICE_QUERY);

  return (
    <>
      {orders && totalPrice ? (
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
                  {orders.userOrders.length !== 0 ? (
                    <>
                      {orders.userOrders.map(
                        (
                          {
                            id: orderId,
                            product: { id: productId, title, price },
                            quantity,
                          },
                          index
                        ) => {
                          return (
                            <ItemOrder
                              key={orderId}
                              orderId={orderId}
                              productId={productId}
                              itemNumber={index + 1}
                              title={title}
                              price={price}
                              quantity={quantity}
                            />
                          );
                        }
                      )}
                      <OrderBottom totalPrice={totalPrice} />
                    </>
                  ) : (
                    <EmptyCart />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OrderSummary;
