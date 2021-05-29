import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "black",
    color: "white",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12.8px",
    lineHeight: "19px",
    fontFamily: ["Oswald", "sans-serif", '"Apple Color Emoji"'].join(","),
    "&:hover": {
      color: "#FFBC15",
      backgroundColor: "black",
    },
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      color: "#FFBC15",
    },
  },
})(Button);

export default function CustomizedButtons(props) {
  return (
    <div>
      <BootstrapButton>{props.title}</BootstrapButton>
    </div>
  );
}
