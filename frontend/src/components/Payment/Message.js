import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { HANDLE_PAYMENT_MUTATION } from "../Api/payment";
import {
  ORDER_CLEAR_ORDERS_MUTATION,
  ORDER_TOTAl_ORDERS_QUERY,
} from "../Api/order/order";

import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    marginBottom: "2rem",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  messageContainer: {
    justifyContent: "center",
  },
}));

const TextMessage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [clearOrders] = useMutation(ORDER_CLEAR_ORDERS_MUTATION);
  const [handlePayment] = useMutation(HANDLE_PAYMENT_MUTATION);

  const [open, setOpen] = useState(false);
  const [messageObject, setMessageObject] = useState({});

  useEffect(() => {
    const handlePaymentMessage = async () => {
      const query = new URLSearchParams(window.location.search);

      if (query.get("success") === "true") {
        await handlePayment();
        await clearOrders({
          refetchQueries: [{ query: ORDER_TOTAl_ORDERS_QUERY }],
        });
        setMessageObject({
          title: "Success!",
          content: "Thanks for purchasing our products!",
        });
      } else if (query.get("success") === "false") {
        setMessageObject({
          title: "Error!",
          content: "Sorry, something went wrong!",
        });
      }
      setOpen(true);
    };
    handlePaymentMessage();
  }, [clearOrders, handlePayment]);

  return (
    <>
      {messageObject && messageObject.title ? (
        <div className={classes.root}>
          <Grid className={classes.messageContainer} container>
            <Grid item xs={10} sm={7} md={5} lg={3}>
              <Collapse in={open}>
                <Alert
                  severity={
                    messageObject.title === "Success!" ? "success" : "error"
                  }
                  action={
                    <IconButton
                      onClick={() => {
                        setOpen(false);
                        setMessageObject({});
                        history.push("/");
                      }}
                      aria-label="close"
                      color="inherit"
                      size="small"
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  <AlertTitle>{messageObject.title}</AlertTitle>
                  {messageObject.content}
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </>
  );
};

export default TextMessage;
