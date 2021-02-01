import React from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT_LIST_QUERY } from "../Api/product";
import Product from "./Product";

const MainContent = () => {
  let labelClass;
  const { data: products } = useQuery(PRODUCT_LIST_QUERY);

  return (
    <>
      {products && products.allProducts ? (
        <div className="container main-content-container">
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
              {/*
              <Product
                key={1}
                id={4}
                title={"gfdg"}
                category={"tvoje mama"}
                price={1321}
                imageName={"black_jacket.jpg"}
                label={"gdfgd"}
                labelClass={"gdfgd"}
              />
              */}
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default MainContent;
