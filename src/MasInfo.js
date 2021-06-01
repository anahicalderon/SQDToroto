import "./MasInfo.css";
import { useHistory } from 'react-router';
import Footer from "./Footer";
import Navbar from "./Navbar";
import bosquea from "../src/Assets/bosquea.png"
import bosqueb from "../src/Assets/bosqueb.png"
import bosquec from "../src/Assets/bosquec.png"
import bosqued from "../src/Assets/bosqued.png"
import bosquee from "../src/Assets/bosquee.png"
import bosquef from "../src/Assets/bosquef.png"
import bosqueg from "../src/Assets/bosqueg.png"


function MasInfo() {
    
   
 
    return (
        <div>
           
            <div>
                {Navbar}
            </div>

            <div className="contenedor-p">

                <div className="container-box" >

                    <div className="Toroto" >
                        <img 
                        src={bosquea} width="300px" ></img>
                        <div>
                            <h2>¿Qué hace toroto?</h2>

                            <p>Cumpliendo con los estándares internacionales más robustos, te ayudamos a medir, reducir y
                            neutralizar tu huella de carbono de manera que agregue valor a tu compañía y al medio ambiente.
                            También desarrollamos soluciones con ayuda de la tecnología que redefinen la manera en la que abordas la sostenibilidad del medio ambiente.</p>
                        </div>
                        <img src={bosqueb} width="300px" ></img>
                    </div>

                    <div className="Toroto"> 
                    <img src={bosquef} width="400px" ></img>
                        <div>
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
                        <div>
                        <h2>¿Qué son los bonos de carbono?</h2>
                        <p>Los bonos de carbono son un mecanismo internacional para reducir las emisiones de CO2
                        que contribuyen al calentamiento global.
                        Un bono de carbono representa el derecho a emitir una tonelada de dióxido de carbono.
                         </p>
                         </div>
                    <img src={bosqueg} width="300px" ></img>
                    </div>
                    
                    <div className="Toroto">
                       
                        <div>
                        <h2>¿Qué es el mercado de carbono?</h2>
                        <p>
                            Un mercado de carbono tiene el propósito de reducir las emisiones de efecto invernadero, a través de la compra de permisos de emisión.
                        </p>
                        </div>
                        <img src={bosquec} width="400px"></img>
                    </div>
                    <div className="Toroto">
                    <img src={bosqued} width="400px"></img>
                        <div>
                        <h2>¿Qué define a un proyecto de captura de carbono?</h2>
                        <p>
                            Nuestro equipo de ingeniería en gestión de carbono puede medir tu huella de carbono de una manera que se adhiere al Protocolo GHG,
                            que es el protocolo que más se usa para medir y reportar las emisiones de gases de efecto invernadero.
                            Después, en conjunto estableceremos metas y seguiremos tu huella de carbono durante el año.
                            Esto se hace de una manera perfecta a través de nuestras soluciones tecnológicas patentadas.
                            Lo que no se pueda reducir, tiene que ser neutralizado. Mediante el apoyo o el funcionamiento de proyectos
                            forestales de alto nivel, Toroto ofrece compensaciones de carbono certificadas por terceros que se ajustan a las normas internacionales más estrictas y generan ingresos en las zonas rurales.
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