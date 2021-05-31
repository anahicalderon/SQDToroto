import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "./Dropdown.css";

export default function DropDown(props) {
  const [dropdown, setDropdown] = useState(false);

  const openAndClose = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <Dropdown isOpen={dropdown} toggle={openAndClose} size="sm">
        <DropdownToggle caret className="Dropdown">
          {props.dropdown}
        </DropdownToggle>
        <DropdownMenu className="Dropdown">
          <DropdownItem className="Dropdown_option">Accion 1</DropdownItem>
          <DropdownItem className="Dropdown_option">Accion 2</DropdownItem>
          <DropdownItem className="Dropdown_option">Accion 3</DropdownItem>
          <DropdownItem className="Dropdown_option">Accion 4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
