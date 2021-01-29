import React from "react";

const CheckoutItems = ({ title, category, price, quantity }) => {
  const finalPrice = quantity * price;

  return (
    <>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">
            {quantity} × {title}
          </h6>
          <small className="text-muted">{category}</small>
        </div>
        <div className="text-muted">
          {quantity !== 1 ? (
            <>
              <span className="mr-2">${price}</span>
              <span>➜</span>
              <span className="ml-2">${finalPrice}</span>
            </>
          ) : (
            <span>${price}</span>
          )}
        </div>
      </li>
    </>
  );
};

export default CheckoutItems;
