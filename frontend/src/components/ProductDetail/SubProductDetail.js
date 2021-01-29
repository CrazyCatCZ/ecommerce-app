import React from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ORDER_CREATE_MUTATION } from "../Api/order";

const PUBLIC_FOLDER = process.env.PUBLIC_URL;

const SubProductDetail = ({
  product: {
    product: { id, title, imageName, price, label, labelColor },
  },
  orderIsAlreadyInCart: { orderIsAlreadyInCart },
}) => {
  const history = useHistory();
  const [createOrder] = useMutation(ORDER_CREATE_MUTATION);

  const handleOnCreateOrder = async () => {
    await createOrder({ variables: { productId: id } });
    history.push("/order-summary");
  };

  return (
    <div className="product-container">
      <div className="container dark-grey-text mt-5">
        <div className="row wow fadeIn">
          <div className="col-md-6 mb-4">
            <img
              src={`${PUBLIC_FOLDER}/static/images/${imageName}`}
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4">
              <p className="lead d-flex align-items-center">
                <b className="font-weight-bold">${price}</b>
                {label ? (
                  <span className={`badge ${labelColor.toLowerCase()} ml-3`}>
                    {label}
                  </span>
                ) : null}
              </p>

              <p className="lead font-weight-bold">Description</p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                Beatae sit assumenda asperiores iure at maxime atque repellendus
                maiores quia sapiente.
              </p>
              {orderIsAlreadyInCart === false ? (
                <button
                  onClick={handleOnCreateOrder}
                  className="btn btn-primary m-0"
                  type="submit"
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

        <hr />

        <div className="row d-flex justify-content-center wow fadeIn">
          <div className="col-md-6 text-center">
            <h4 className="my-4 h4">Additional information</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates, quibusdam
              officia. Neque quibusdam quas a quis porro? Molestias illo neque
              eum in laborum.
            </p>
          </div>
        </div>

        <div className="row wow fadeIn">
          <div className="col-lg-4 col-md-12 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubProductDetail;
