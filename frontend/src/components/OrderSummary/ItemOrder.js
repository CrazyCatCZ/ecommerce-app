import React from "react";
import { useMutation } from "@apollo/client";
import { useHistory, Link } from "react-router-dom";
import {
  ORDER_DELETE_MUTATION,
  ORDER_INCREASE_QUANTITY_MUTATION,
  ORDER_DECREASE_QUANTITY_MUTATION,
} from "../Api/order";

const ItemOrder = ({
  orderId,
  productId,
  itemNumber,
  title,
  price,
  quantity,
}) => {
  const history = useHistory();
  const totalItemPrice = price * quantity;

  const [deleteOrder] = useMutation(ORDER_DELETE_MUTATION);
  const [increaseQuantity] = useMutation(ORDER_INCREASE_QUANTITY_MUTATION);
  const [decreaseQuantity] = useMutation(ORDER_DECREASE_QUANTITY_MUTATION);

  const handleOnDelete = async () => {
    await deleteOrder({ variables: { orderId } });
  };

  const handleOnIncreaseQuantity = async () => {
    await increaseQuantity({ variables: { orderId } });
  };

  const handleOnDecreaseQuantity = async () => {
    await decreaseQuantity({ variables: { orderId } });
  };

  return (
    <>
      <tr>
        <th scope="row">{itemNumber}</th>
        <td
          className="clickable-container"
          onClick={() => history.push(`product/${productId}`)}
        >
          {title}
        </td>
        <td>{price}$</td>
        <td>
          <i
            onClick={handleOnDecreaseQuantity}
            className="fas fa-minus mr-2 clickable-container"
          ></i>
          <span>{quantity}</span>
          <i
            onClick={handleOnIncreaseQuantity}
            className="fas fa-plus ml-2 clickable-container"
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
