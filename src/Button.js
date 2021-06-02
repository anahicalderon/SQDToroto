import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "transparent",
    color: "white",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12.8px",
    lineHeight: "19px",
    fontFamily: ["Oswald", "sans-serif", '"Apple Color Emoji"'].join(","),
    "&:hover": {
     
      backgroundColor: "#BA1863 ",
    },
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      color: "#FFF",
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
