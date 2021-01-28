import React from "react";

const CheckoutItems = ({ title, category, price, quantity }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">
            {quantity} × {title}
          </h6>
          <small className="text-muted">{category}</small>
        </div>
        <span className="text-muted">${price}</span>
      </li>
    </>
  );
};

export default CheckoutItems;
