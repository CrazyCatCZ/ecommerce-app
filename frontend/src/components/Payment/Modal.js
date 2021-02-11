import React from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CREATE_CHECKOUT_SESSION_MUTATION } from "../Api/resolvers/payment";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    minWidth: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(7, 10, 7),
  },
  submitButton: {
    display: "flex",
    margin: "auto",
    marginTop: theme.spacing(3),
    background: "#1976D2",
    "&:hover": {
      background: "#1976D2",
    },
  },
}));

// Get key from .env file
const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
//const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_LIVE_PUBLIC_KEY;
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const PaymentModal = ({
  modalIsOpen,
  closeModal,
  totalPrice: { totalPriceOfOrders: totalPrice },
}) => {
  const history = useHistory();
  const classes = useStyles();

  const [createCheckoutSession, { loading }] = useMutation(
    CREATE_CHECKOUT_SESSION_MUTATION
  );

  const handleOnSubmit = async () => {
    const stripe = await stripePromise;

    const { data: response } = await createCheckoutSession({
      variables: { totalPrice },
    });
    const session = await JSON.parse(response.createCheckoutSession.session);

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      history.push("?success=false");
    }
  };

  return (
    <Modal
      className={classes.modal}
      open={modalIsOpen}
      onClose={closeModal}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalIsOpen}>
        <div className={classes.paper}>
          <h2 align="center" id="transition-modal-title">
            <b>Warning!</b>
          </h2>
          <hr />
          <h5 id="transition-modal-description">
            You will not receive any of those products!
          </h5>
          <Button
            className={classes.submitButton}
            disabled={loading}
            onClick={handleOnSubmit}
            size="large"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default PaymentModal;
