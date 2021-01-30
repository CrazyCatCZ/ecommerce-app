import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useHistory, Link } from "react-router-dom";
import {
  ORDER_USER_LIST_QUERY,
  ORDER_DELETE_MUTATION,
  ORDER_INCREASE_QUANTITY_MUTATION,
  ORDER_DECREASE_QUANTITY_MUTATION,
  ORDER_TOTAl_ORDERS_QUERY,
  ORDER_IS_ALREADY_IN_CART_QUERY,
  ORDER_TOTAL_PRICE_QUERY,
} from "../Api/order/order";

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

  const [quantityValue, setQuantityValue] = useState();
  const [deleteOrder, { loading: deleteLoading }] = useMutation(
    ORDER_DELETE_MUTATION
  );
  const [increaseQuantity] = useMutation(ORDER_INCREASE_QUANTITY_MUTATION);
  const [decreaseQuantity] = useMutation(ORDER_DECREASE_QUANTITY_MUTATION);

  useEffect(() => {
    setQuantityValue(quantity);
  }, [quantity]);

  const handleOnDelete = async () => {
    await deleteOrder({
      variables: { orderId },
      refetchQueries: [
        { query: ORDER_USER_LIST_QUERY },
        { query: ORDER_TOTAl_ORDERS_QUERY },
        { query: ORDER_TOTAL_PRICE_QUERY },
        { variables: { productId }, query: ORDER_IS_ALREADY_IN_CART_QUERY },
      ],
    });
  };

  const handleOnIncreaseQuantity = async () => {
    setQuantityValue((quantity) => quantity + 1);
    await increaseQuantity({
      variables: { orderId },
      refetchQueries: [
        { query: ORDER_TOTAL_PRICE_QUERY },
        { query: ORDER_USER_LIST_QUERY },
      ],
    });
  };

  const handleOnDecreaseQuantity = async () => {
    setQuantityValue((quantity) => quantity - 1);
    await decreaseQuantity({
      variables: { orderId },
      refetchQueries: [
        { query: ORDER_TOTAL_PRICE_QUERY },
        { query: ORDER_USER_LIST_QUERY },
      ],
    });
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
        <td>${price}</td>
        <td>
          {quantityValue <= 1 ? (
            <i className="fas fa-minus mr-2 fa-disabled" />
          ) : (
            <i
              onClick={handleOnDecreaseQuantity}
              className="fas fa-minus mr-2 clickable-container"
            />
          )}
          <span>{quantityValue}</span>
          {quantityValue >= 5 ? (
            <i className="fas fa-plus ml-2 fa-disabled" />
          ) : (
            <i
              onClick={handleOnIncreaseQuantity}
              className="fas fa-plus ml-2 clickable-container"
            />
          )}
        </td>
        <td>
          <span>${totalItemPrice}</span>
          <Link style={{ color: "red" }}>
            {deleteLoading ? (
              <i className="fas fa-trash float-right fa-lg" />
            ) : (
              <i
                onClick={handleOnDelete}
                className="fas fa-trash float-right fa-lg"
              />
            )}
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ItemOrder;
