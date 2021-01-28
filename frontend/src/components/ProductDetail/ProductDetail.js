import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PRODUCT_DETAIL_QUERY } from "../Api/product";
import SubProductDetail from "./SubProductDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const [getProduct, { data: product }] = useLazyQuery(PRODUCT_DETAIL_QUERY);

  useEffect(() => {
    getProduct({ variables: { id } });
  }, [id, getProduct]);

  return <>{product ? <SubProductDetail product={product} /> : null}</>;
};

export default ProductDetail;
