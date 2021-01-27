import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, category, price, imageName, label }) => {
  let labelClass;

  if (label) {
    labelClass = label === "NEW" ? "danger-color" : "primary-color";
  }

  console.log(imageName);

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <div className="view overlay">
          <img
            src={`${process.env.PUBLIC_URL}/images${imageName}`}
            className="card-img-top"
            alt=""
          />
          <Link to="/product/1">
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body text-center">
          <Link to="product/1" className="grey-text">
            <h5>{category}</h5>
          </Link>
          <h5>
            <strong>
              <Link to="product/1" className="dark-grey-text">
                {title}
                <span className={`ml-1 badge badge-pill ${labelClass}`}>
                  {label}
                </span>
              </Link>
            </strong>
          </h5>

          <h4 className="font-weight-bold blue-text">
            <strong>{price}$</strong>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
