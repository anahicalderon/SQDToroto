import "./Navbar.css";
import logo from "./Assets/toroto_logo.png";
import CustomizedButtons from "./Button";
//import {historyPage} from "./MasInfo";

export default function Navbar() {
  


  return (
    <div className="Navbar">
      <div>
        <img className="Logo" src={logo} alt="logo" />
      </div>
      
      <div className="Container_nav">
        <CustomizedButtons  title="Más Información"></CustomizedButtons>
        
      </div>
    </div>
  );
}
