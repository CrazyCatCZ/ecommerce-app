import React, { useState } from "react";
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
    "& > * + *": {},
  },
  messageContainer: {
    justifyContent: "center",
  },
}));

const TextMessage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  console.log("test");

  /*
  useEffect(() => {
    setOpen(true);

    if (message === "success") {
      setMessageObject({
        title: "Success!",
        content: "content here"
      });
    } else if (message === "error") {
      setMessageObject({
        title: "Error!",
        content:"Sorry, something went wrong!"
      });
    }
  }, [message]);
  */

  return (
    <div className={classes.root}>
      <Grid className={classes.messageContainer} container>
        <Grid item xs={11} sm={8} md={6} lg={4}>
          <Collapse in={open}>
            <Alert
              severity={"success"}
              action={
                <IconButton
                  onClick={() => {
                    setOpen(false);
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
              <AlertTitle>title here</AlertTitle>
              content here
            </Alert>
          </Collapse>
        </Grid>
      </Grid>
    </div>
  );
};

export default TextMessage;
