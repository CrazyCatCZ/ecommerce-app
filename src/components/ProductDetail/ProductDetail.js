import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PRODUCT_DETAIL_QUERY } from "../Api/resolvers/product/product";
import { ORDER_IS_ALREADY_IN_CART_QUERY } from "../Api/resolvers/order/order";
import SubProductDetail from "./SubProductDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const [getProduct, { data: product }] = useLazyQuery(PRODUCT_DETAIL_QUERY);
  const [
    checkIfOrderIsAlreadyInCart,
    { data: orderIsAlreadyInCart },
  ] = useLazyQuery(ORDER_IS_ALREADY_IN_CART_QUERY);

  useEffect(() => {
    getProduct({ variables: { id } });
    checkIfOrderIsAlreadyInCart({ variables: { productId: id } });
  }, [id, getProduct, checkIfOrderIsAlreadyInCart]);

  return (
    <>
      {product && orderIsAlreadyInCart ? (
        <SubProductDetail
          product={product}
          orderIsAlreadyInCart={orderIsAlreadyInCart}
        />
      ) : null}
    </>
  );
};

export default ProductDetail;
