import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  ORDER_USER_LIST_QUERY,
  ORDER_TOTAL_PRICE_QUERY,
} from "../Api/order/order";

import SubCheckout from "./SubCheckout";
import Modal from "./Modal";

const Checkout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data: orders } = useQuery(ORDER_USER_LIST_QUERY);
  const { data: totalPrice } = useQuery(ORDER_TOTAL_PRICE_QUERY);

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
          />
        </>
      ) : null}
    </>
  );
};

export default Checkout;
