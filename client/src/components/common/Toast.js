import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Toast({ text, severity }) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      style={{ height: "30%" }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
    >
      <Alert
        style={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.3)",
        }}
        onClose={handleClose}
        severity={severity}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
