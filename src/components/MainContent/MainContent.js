import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { PRODUCT_CATEGORY_QUERY } from "../Api/resolvers/product/product";

import Product from "./Product";
import Categories from "./Categories";

const MainContent = () => {
  let labelClass;
  const [category, setCategory] = useState("all");
  const [getProducts, { data: products, loading }] = useLazyQuery(
    PRODUCT_CATEGORY_QUERY
  );

  useEffect(() => {
    getProducts({ variables: { category } });
  }, [category, getProducts]);

  return (
    <>
      <div className="container main-content-container">
        <Categories setCategory={setCategory} />
        {products && products.productsByCategory && loading === false ? (
          <section className="text-center mb-4">
            <div className="row wow fadeIn">
              {products.productsByCategory.map(
                ({ id, title, category, price, imageName, label }) => {
                  if (label) {
                    labelClass =
                      label === "NEW" ? "danger-color" : "primary-color";
                  }

                  return (
                    <Product
                      key={id}
                      id={id}
                      title={title}
                      category={category}
                      price={price}
                      imageName={imageName}
                      label={label}
                      labelClass={labelClass}
                    />
                  );
                }
              )}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default MainContent;
