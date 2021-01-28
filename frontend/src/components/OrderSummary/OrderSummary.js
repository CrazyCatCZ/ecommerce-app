import React from "react";
import { useQuery } from "@apollo/client";
import { ORDER_USER_LIST_QUERY } from "../Api/order";
import FilledCart from "./FilledCart";
import EmptyCart from "./EmptyCart";

const OrderSummary = () => {
  const { data: orders } = useQuery(ORDER_USER_LIST_QUERY);

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
            <tbody>{orders ? <FilledCart /> : <EmptyCart />}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
