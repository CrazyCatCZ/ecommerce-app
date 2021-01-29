import React from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import {
  ORDER_DELETE_MUTATION,
  ORDER_INCREASE_QUANTITY_MUTATION,
  ORDER_DECREASE_QUANTITY_MUTATION,
} from "../Api/order";

const ItemOrder = ({ id, itemNumber, title, price, quantity }) => {
  const totalItemPrice = price * quantity;

  const [deleteOrder] = useMutation(ORDER_DELETE_MUTATION);
  const [increaseQuantity] = useMutation(ORDER_INCREASE_QUANTITY_MUTATION);
  const [decreaseQuantity] = useMutation(ORDER_DECREASE_QUANTITY_MUTATION);

  console.log(id);

  const handleOnDelete = async () => {
    await deleteOrder({ variables: { orderId: id } });
  };

  const handleOnIncreaseQuantity = async () => {
    await increaseQuantity({ variables: { orderId: id } });
  };

  const handleOnDecreaseQuantity = async () => {
    await decreaseQuantity({ variables: { orderId: id } });
  };

  return (
    <>
      <tr>
        <th scope="row">{itemNumber}</th>
        <td>{title}</td>
        <td>{price}$</td>
        <td>
          <i
            onClick={handleOnDecreaseQuantity}
            className="fas fa-minus mr-2 counter-icon"
          ></i>
          <span>{quantity}</span>
          <i
            onClick={handleOnIncreaseQuantity}
            className="fas fa-plus ml-2 counter-icon"
          ></i>
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
