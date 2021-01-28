import React from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT_LIST_QUERY } from "./Api/product";
import Product from "./Product";

const MainContent = () => {
  let labelClass;

  const { data: products } = useQuery(PRODUCT_LIST_QUERY);

  return (
    <div>
      {products && products.allProducts ? (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5" />

          <section className="text-center mb-4">
            <div className="row wow fadeIn">
              {products.allProducts.map(
                ({ id, title, category, price, imageName, label }) => {
                  category = category.replace("_", " ");

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
        </div>
      ) : null}
    </div>
  );
};

export default MainContent;
