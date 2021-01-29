import React from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ORDER_DELETE_MUTATION } from "../Api/order";

const ItemOrder = ({ id, itemNumber, title, price, quantity }) => {
  const [deleteOrder] = useMutation(ORDER_DELETE_MUTATION);
  const totalItemPrice = price * quantity;

  const handleOnDelete = async () => {
    await deleteOrder({ variables: { orderId: id } });
  };

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
          <Link style={{ color: "red" }}>
            <i
              onClick={handleOnDelete}
              className="fas fa-trash float-right fa-lg"
            ></i>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ItemOrder;
