import "./Navbar.css";
import logo from "./Assets/toroto_logo.png";
import CustomizedButtons from "./Button";
import DropDown from "./Dropdown";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <img className="Logo" src={logo} alt="logo" />
      </div>
      <div className="Container_dropdown">
        <DropDown dropdown="Tipo" />
        <DropDown dropdown="Ubicación" />
        <DropDown dropdown="Tenencia" />
        <DropDown dropdown="Status" />
      </div>
      <div className="Container_nav">
        <CustomizedButtons title="Más Información"></CustomizedButtons>
        <CustomizedButtons title="Iniciar Sesión"></CustomizedButtons>
        <CustomizedButtons title="Registrarse"></CustomizedButtons>
      </div>
    </div>
  );
}
