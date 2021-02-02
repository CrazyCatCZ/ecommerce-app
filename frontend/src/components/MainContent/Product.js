import React from "react";
import { useHistory, Link } from "react-router-dom";

const PUBLIC_FOLDER = process.env.PUBLIC_URL;

const Product = ({
  id,
  title,
  category,
  price,
  imageName,
  label,
  labelClass,
}) => {
  const history = useHistory();

  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <div className="view overlay">
            <img
              src={`${PUBLIC_FOLDER}/static/images/${category.toLowerCase()}/${imageName}`}
              className="card-img-top"
              alt=""
            />
            <Link onClick={() => history.push(`product/${id}`)}>
              <div className="mask rgba-white-slight"></div>
            </Link>
          </div>

          <div className="card-body text-center">
            <Link
              onClick={() => history.push(`product/${id}`)}
              className="grey-text"
            ></Link>
            <h5>
              <strong>
                <Link to="product/1" className="dark-grey-text">
                  {title}
                  <span className={`ml-2 badge badge-pill ${labelClass}`}>
                    {label}
                  </span>
                </Link>
              </strong>
            </h5>

            <h4 className="font-weight-bold blue-text">
              <strong>${price}</strong>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
