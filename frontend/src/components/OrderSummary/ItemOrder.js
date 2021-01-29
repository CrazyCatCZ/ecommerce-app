import React from "react";
import { Link } from "react-router-dom";

const ItemOrder = ({ itemNumber, title, price, quantity }) => {
  const totalItemPrice = price * quantity;

  return (
    <>
      <tr>
        <th scope="row">{itemNumber}</th>
        <td>{title}</td>
        <td>{price}$</td>
        <td>
          <i className="fas fa-minus mr-2 counter-icon"></i>
          <span>{quantity}</span>
          <i className="fas fa-plus ml-2 counter-icon"></i>
        </td>
        <td>
          {totalItemPrice}$
          <Link style={{ color: "red" }} to="/">
            <i className="fas fa-trash float-right fa-lg"></i>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ItemOrder;