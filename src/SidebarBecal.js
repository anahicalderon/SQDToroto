import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./Sidebar.css";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const ButtonSidebar = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    width: "114px",
    height: "22px",
    margin: "5px",
    backgroundColor: " #1930DB",
    color: "white",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "19px",
    borderRadius: "0",
    fontFamily: ["Oswald", "sans-serif", '"Apple Color Emoji"'].join(","),
    "&:hover": {
      color: "#fff;",
      backgroundColor: "#FFBC15",
    },
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      color: "#FFBC15",
    },
  },
})(Button);

const ButtonFlora = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    width: "114px",
    height: "35px",
    margin: "5px",
    border: "1px Solid #BA1863",
    color: "#BA1863",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "19px",
    borderRadius: "0",
    fontFamily: ["Oswald", "sans-serif", '"Apple Color Emoji"'].join(","),
    "&:hover": {
      color: "#BA1863",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
})(Button);

const ButtonFauna = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    width: "114px",
    height: "35px",
    margin: "5px",
    border: "1px Solid #FFBC15",
    color: "#FFBC15",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "19px",
    borderRadius: "0",
    fontFamily: ["Oswald", "sans-serif", '"Apple Color Emoji"'].join(","),
    "&:active": {
      boxShadow: "none",
    },
  },
})(Button);

function SidebarBecal() {
  const [open, setOpen] = useState(true);
  const list = () => (
    <div style={{ width: 280 }} onClick={() => setOpen(false)}>
      <List>
        {[
          <img
            src="https://www.gob.mx/cms/uploads/image/file/459326/nuevo_becal_7.jpg"
            alt="NuevoBecal"
            width="250px"
          />,
          <div>
            <ButtonSidebar id="adp" variant="contained">
              ADP
            </ButtonSidebar>
            <ButtonSidebar id="coverage" variant="contained">
              Cobertura Vegetal
            </ButtonSidebar>
            <ButtonSidebar id="ff" variant="contained">
              Flora y Fauna
            </ButtonSidebar>
            <ButtonSidebar id="lb" variant="contained">
              Localidades Beneficiadas
            </ButtonSidebar>
            <ButtonSidebar id="tcc" variant="contained">
              Carbono
            </ButtonSidebar>
          </div>,
        ].map((label, index) => (
          <ListItem button key={index}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default SidebarBecal;
