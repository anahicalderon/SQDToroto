import React, { useState } from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as ubicaciones from "./Componentes/Ubicacion.json"
import Vector from '../src/Assets/Vector.png'


export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 18.4442,
    longitude: -89.1036,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });

  const [selectedPin, setSelectedPin] = useState(null);

  
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ"
        mapStyle="mapbox://styles/elizabethgh/ckp8r5cxj28lq18p5ud5gwhy4"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {ubicaciones.features.map((ubicacion)=>(
          <Marker 
          latitude={ubicacion.geometry.coordinates[0]}
          longitude={ubicacion.geometry.coordinates[1]}
          >
          <img
            alt="Proyecto"
            src={Vector}
            width={40}
            height={40}
            onMouseOver = {(e)=>{
              e.preventDefault();
              setSelectedPin(ubicacion)
            }
              
            }
            />
          </Marker>
        )

        )}
        {selectedPin ? (
                  <Popup 
                  latitude={selectedPin.geometry.coordinates[0]} 
                  longitude={selectedPin.geometry.coordinates[1]} 
                  onClose={()=>{
                    setSelectedPin(null);
                  }}>
                    <div>
                      <h2>{selectedPin.properties.title}</h2>
                      <p>{selectedPin.properties.description}</p>
                      <button>Mas Información</button>
                    </div>
                 </Popup>
        ) : null }


      </ReactMapGL>
    </div>
    
  );

}
