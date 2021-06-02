import "./Navbar.css";
import logo from "./Assets/toroto_logo.png";
import CustomizedButtons from "./Button";
import MasInfo from './MasInfo';
import { Link } from 'react-router-dom';


export default function Navbar() {
  
   
  

  return (
    <div className="Navbar">
      <div>
        <img  className="Logo" src={logo} alt="logo" />
      </div>
      
      <div className="Container_nav">
         <Link style={{textDecoration:"none"}} to = './MasInfo' className="Botonlink" title="Más Información">Más Información</Link>
        
      </div>
    </div>
  );
}
