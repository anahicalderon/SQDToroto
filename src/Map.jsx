import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 23.634501,
    longitude: -102.552784,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });
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
        <Marker latitude={18.4486309} longitude={-90.2192165}>
          <img
            alt="marker"
            src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
            width={40}
            height={40}
          />
        </Marker>
        <Marker latitude={18.609742} longitude={-89.3112548}>
          <img
            alt="marker"
            src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
            width={40}
            height={40}
          />
        </Marker>
      </ReactMapGL>
    </div>
  );
}
