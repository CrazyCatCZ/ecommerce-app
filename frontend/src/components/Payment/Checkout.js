import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { UserContext } from "../Context/UserContext";
import {
  ORDER_USER_LIST_QUERY,
  ORDER_TOTAL_PRICE_QUERY,
} from "../Api/order/order";

import SubCheckout from "./SubCheckout";
import Modal from "./Modal";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data: orders } = useQuery(ORDER_USER_LIST_QUERY);
  const { data: totalPrice } = useQuery(ORDER_TOTAL_PRICE_QUERY);

  useEffect(() => {
    if (user === null) {
      history.push("/login");
    }
  }, [user, history]);

  return (
    <>
      {orders && totalPrice ? (
        <>
          <SubCheckout
            orders={orders}
            totalPrice={totalPrice}
            openModal={() => setModalIsOpen(true)}
          />
          <Modal
            modalIsOpen={modalIsOpen}
            closeModal={() => setModalIsOpen(false)}
            totalPrice={totalPrice}
          />
        </>
      ) : null}
    </>
  );
};

export default Checkout;
