import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "2rem",
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

  const [open, setOpen] = useState(false);
  const [messageObject, setMessageObject] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success") === "true") {
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
  }, []);

  return (
    <div className={classes.root}>
      {messageObject && messageObject.title ? (
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
      ) : null}
    </div>
  );
};

export default TextMessage;
