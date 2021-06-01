import "./MasInfo.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import bosquea from "../src/Assets/bosquea.png"
import bosqueb from "../src/Assets/bosqueb.png"
import bosquec from "../src/Assets/bosquec.png"
import bosqued from "../src/Assets/bosqued.png"
import bosquee from "../src/Assets/bosquee.png"
import bosquef from "../src/Assets/bosquef.png"
import bosqueg from "../src/Assets/bosqueg.png"
import { useHistory } from 'react-router';

function MasInfo() {
    const history = useHistory();

    const historyPage = () => {
        history.push('/')
    }
   
    return (
        <div >
           <button className="botonV"  onClick={historyPage} title="Más Información">Volver</button>
            <div>
                {Navbar}
            </div>

            <div className="contenedor-p">

                <div className="container-box" >

                    <div className="Toroto" >
                        <img 
                        src={bosquea} width="300px" ></img>
                        <div className="div-parrafos">  
                            <h2>¿Qué hace Toroto?</h2>

                            <p>Cumpliendo con los estándares internacionales más robustos, te ayudamos a medir, reducir y
                            neutralizar tu huella de carbono de manera que agregue valor a tu compañía y al medio ambiente.
                            También desarrollamos soluciones con ayuda de la tecnología que redefinen la manera en la que abordas la sostenibilidad del medio ambiente.</p>
                        </div>
                        <img src={bosqueb} width="300px" ></img>
                    </div>

                    <div className="Toroto"> 
                    <img src={bosquef} width="400px" ></img>
                        <div className="div-parrafos">
                            <h2>¿Qué es la captura de carbono ?</h2>
                            <p>
                            El proceso consiste en tres etapas principales:
                            Capturar el CO2 en su fuente, separándolo de los otros gases que se generan en los procesos industriales.
                            Transportar el CO2 capturado a un lugar de almacenamiento apropiado
                            Almacenar el CO2 fuera de la atmósfera durante un largo periodo de tiempo</p>
                            </div>
                      
                    </div>
                    
                    <div className="Toroto">
                    <img src={bosquee} width="300px" ></img>
                        <div className="div-parrafos">
                        <h2>¿Qué son los bonos de carbono?</h2>
                        <p>Un bono de carbono representa el derecho a emitir una tonelada de CO2— permite mitigar la generación de gases de efecto invernadero, 
                            beneficiando a las empresas que no emiten o disminuyen la emisión y haciendo pagar a las que emiten más de lo permitido.

                         </p>
                         </div>
                    <img src={bosqueg} width="300px" ></img>
                    </div>
                    
                    <div className="Toroto">
                       
                        <div className="div-parrafos">
                        <h2>¿Qué es el mercado de carbono?</h2>
                        <p>
                            Un mercado de carbono tiene el propósito de reducir las emisiones de efecto invernadero, a través de la compra de permisos de emisión.
                        </p>
                        </div>
                        <img src={bosquec} width="400px"></img>
                    </div>
                    <div className="Toroto">
                    <img src={bosqued} width="400px"></img>
                        <div className="div-parrafos">
                        <h2>¿Qué define a un proyecto de captura de carbono?</h2>
                        <p>
                        En Toroto a diferencia de otras empresas,  integramos todos los procesos 
                        de captura de carbono brindandote la confianza de que  vas adquirir un bono de carbono de calidad, con esto nos referimos a que tu bono siga mitigando el impacto ambiental de forma permanente de la siguiente manera:
                        -Diseño y operación de proyectos de conservación y restauración  ecológica.
                        -certificación de proyectos de captura de carbono.
                        -Programas de compensación a través de nuestros programas de captura de carbono.
                        -estrategias de mitigación.
                        -Inventario de   Gases Efecto Invernadero. 
                        </p>
                        </div>
                        
                    </div>
                    
                </div>
                <div>{Footer} </div>
            </div>
        </div>
    );




}
//<img src={torotoB} width="100%" height="20%"></img>

export default MasInfo;