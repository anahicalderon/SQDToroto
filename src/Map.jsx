import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 23.634501,
    longitude: -102.552784,
    width: "100vw",
    height: "91vh",
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
        marker here
      </ReactMapGL>
    </div>
  );
}
