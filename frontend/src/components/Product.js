import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <div className="view overlay">
          <img
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
            className="card-img-top"
            alt=""
          />
          <Link to="/product/1">
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body text-center">
          <Link to="product/1" className="grey-text">
            <h5>Shirt</h5>
          </Link>
          <h5>
            <strong>
              <Link to="product/1" className="dark-grey-text">
                Denim shirt
                <span className="ml-1 badge badge-pill danger-color">NEW</span>
              </Link>
            </strong>
          </h5>

          <h4 className="font-weight-bold blue-text">
            <strong>120$</strong>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
