import React from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  ORDER_USER_LIST_QUERY,
  ORDER_CREATE_MUTATION,
  ORDER_IS_ALREADY_IN_CART_QUERY,
  ORDER_TOTAL_PRICE_QUERY,
  ORDER_TOTAl_ORDERS_QUERY,
} from "../Api/order/order";

const PUBLIC_FOLDER = process.env.PUBLIC_URL;

const SubProductDetail = ({
  product: {
    product: { id, category, description, price, imageName, label, labelColor },
  },
  orderIsAlreadyInCart: { orderIsAlreadyInCart },
}) => {
  const history = useHistory();
  const [createOrder, { loading }] = useMutation(ORDER_CREATE_MUTATION);

  const handleOnCreateOrder = async () => {
    await createOrder({
      variables: { productId: id },
      refetchQueries: [
        { query: ORDER_USER_LIST_QUERY },
        { query: ORDER_TOTAL_PRICE_QUERY },
        { query: ORDER_TOTAl_ORDERS_QUERY },
        { variables: { productId: id }, query: ORDER_IS_ALREADY_IN_CART_QUERY },
      ],
    });
    history.push("/order-summary");
  };

  return (
    <div className="product-container">
      <div className="container dark-grey-text">
        <div className="row wow fadeIn">
          <div className="col-md-6 mb-4">
            <img
              src={`${PUBLIC_FOLDER}/static/images/${category.toLowerCase()}/${imageName}`}
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4">
              <p className="lead d-flex align-items-center">
                <b className="font-weight-bold">${price}</b>
                <span className={`badge red ml-3`}>{category}</span>
                {label ? (
                  <span className={`badge ${labelColor.toLowerCase()} ml-3`}>
                    {label}
                  </span>
                ) : null}
              </p>

              <p className="lead font-weight-bold">Description</p>
              <p className="mb-4">{description}</p>

              {orderIsAlreadyInCart === false ? (
                <button
                  onClick={handleOnCreateOrder}
                  className="btn btn-primary m-0"
                  type="submit"
                  disabled={loading}
                >
                  Add to cart
                  <i className="fas fa-shopping-cart ml-2" />
                </button>
              ) : (
                <button
                  onClick={() => history.push("/order-summary")}
                  className="btn btn-primary m-0"
                  type="submit"
                >
                  Already in cart
                  <i className="fas fa-shopping-cart ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubProductDetail;
