import React from "react";
import { useQuery } from "@apollo/client";
import { ORDER_USER_LIST_QUERY } from "../Api/order";
import ItemOrder from "./ItemOrder";
import EmptyCart from "./EmptyCart";
import OrderBottom from "./OrderBottom";

const OrderSummary = () => {
  const { data: orders } = useQuery(ORDER_USER_LIST_QUERY);

  console.log(orders);

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
              {orders ? (
                <>
                  {orders.userOrders.map(({ id, product }) => {
                    return <ItemOrder key={id} />;
                  })}
                  <OrderBottom />
                </>
              ) : (
                <EmptyCart />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
