import React, { useState, useEffect } from "react";
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import adp from './Data/LagunaOm/ADP.geojson'
import cv from './Data/LagunaOm/Cobertura_Vegetal.geojson'
import ff from './Data/LagunaOm/Flora_Fauna.geojson'
import lb from './Data/LagunaOm/Localidades_Beneficiadas.geojson'
import tcc from './Data/LagunaOm/Ton_CO2_carbono.geojson'

const Layers = {
  type: "geojson",
  data:adp,
  id: 'adp_Style',
  type: "fill",
  source: "ADP",
  layout: {},
  paint: {
    "fill-color": "#0080ff",
    "fill-opacity": 0.5,
  },
    type: "geojson",
    data:cv,
    id: 'cv_Style',
    type: "line",
    source: "CV",
    layout: {},
    paint: {
      "line-color": "#0000FF",
            "line-width": 3,
  },
    type: "geojson",
    data:ff,
    id: 'FF_Style',
    type: "fill",
    source: "FF",
    layout: {},
    paint: {
      "fill-color": "#0080ff",
      "fill-opacity": 0.5,
  },
    type: "geojson",
    data:lb,
    id: 'LB_Style',
    type: "fill",
    source: "LB",
    layout: {},
    paint: {
      "fill-color": "#0080ff",
      "fill-opacity": 0.5,
  },
    type: "geojson",
    data:tcc,
    id: 'TCC_Style',
    type: "fill",
    source: "TCC",
    layout: {},
    paint: {
    "fill-color": "#0080ff",
    "fill-opacity": 0.5,
  },
}


function LagunaOm() {
  const [viewport, setViewport] = React.useState({
    longitude:-89.15095099588774,
    latitude: 18.701800462540451,
    zoom: 9
  });


  return (

    <ReactMapGL {...viewport} width="100vw" height="100vh"
    mapboxApiAccessToken="pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ"
    mapStyle="mapbox://styles/elizabethgh/ckp8r5cxj28lq18p5ud5gwhy4"
     onViewportChange={setViewport}>
      <Source id="my-data" type="geojson" data={adp}>
        <Layer {...Layers} />
      </Source>
    </ReactMapGL>
  );
}
export default LagunaOm;


/* import React, { useState, useEffect } from "react";
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

//import ScatterplotOverlay from './scatterplot-overlay';
//import ChoroplethOverlay from './choropleth-overlay';

//import ReactMapGL, {Source, Layer} from 'react-map-gl';
import adp from './Data/LagunaOm/ADP.geojson'
//import cv from './Data/LagunaOm/Cobertura_Vegetal.geojson'


const MAPBOX_TOKEN = '"pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ"'; // Set your mapbox token here

const ADPData = ZIPCODES_SF.features.map(f => {
  f.properties.value = Math.random() * 1000;
  return f;
})

//const ADPData = ADP;

//console.log(ADPData);

export default function LagunaOm() {
  const [viewport, setViewport] = useState({
    longitude:-89.15095099588774,
    latitude: 18.701800462540451,
    zoom: 9
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
     <ScatterplotOverlay
        key="scatterplot"
        locations={ADPData}
        dotRadius={10}
        globalOpacity={0.8}
        compositeOperation="lighter"
        dotFill="#00a8fe"
      /> }
    </MapGL>
  );
}

render(<LagunaOm />, document.body.appendChild(document.createElement('div'))); */
/* 
mapboxgl.accessToken ="pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ";

export default function LagunaOm() {
  const [pageIsMounted, setPageIsMounted] = useState(false)
  
  useEffect(()=>{
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/mapbox/outdoors-v11",
      center:  [-89.15095099588774, 18.701800462540451],
      zoom: 10
    })
    map.on("load", function () {
      // ADP map, rendering more style
      map.addSource("ADP", {
        type: "geojson",
        data: adp,
      });

      map.addLayer({
        id: "ADP",
        type: "fill",
        source: "ADP", 
        layout: {},
        paint: {
          "fill-color": "#0080ff", 
          "fill-opacity": 0.5,
        },
      });
      
       map.addLayer({
        id: "outline",
        type: "line",
        source: "ADP",
        layout: {},
        paint: {
          "line-color": "#0000FF",
          "line-width": 3,
        }
      })
      

      // coverage map, rendering more style

      map.addSource("coverage", {
        type: "geojson",
        data: cv
      });

      map.addLayer({
        id: "coverage",
        type: "fill",
        source: "coverage", 
        layout: {},
        paint: {
          "fill-color": "#2E8B57", 
          "fill-opacity": 0.5,
        },
      });
  
      // Flora and fauna map, rendering more style

      map.addSource("FF", {
        type: "geojson",
        data: ff
      });

      map.addLayer({
          id: "FF",
          type: "circle",
          source: "FF", 
          layout: {},
          paint: {
            "circle-radius": 8, 
            "circle-color": 'rgb(128, 0, 0)',
          },
        });

        var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
          });
           
          map.on('mouseenter', 'places', function (ff) {
          // Change the cursor style as a UI indicator.
          map.getCanvas().style.cursor = 'pointer';

          console.log(ff)
           
          var coordinates = ff.features[0].geometry.coordinates.slice();
          var description = ff.features[0].properties.description;
           
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(ff.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += ff.lngLat.lng > coordinates[0] ? 360 : -360;
          }
           
          // Populate the popup and set its coordinates
          // based on the feature found.
          popup.setLngLat(coordinates).setHTML(description).addTo(map);
          });
           
          map.on('mouseleave', 'places', function () {
          map.getCanvas().style.cursor = '';
          popup.remove();
          });
        
      // localities map, rendering more style

      map.addSource("LB", {
        type: "geojson",
        data: lb
      });

      map.addLayer({
            id: "LB",
            type: "circle",
            source: "LB", 
            layout: {},
            paint: {
              "circle-radius": 5, 
              "circle-color": 'rgb(0, 0, 0)',
            },
          });
  
      map.addSource("TCC", {
        type: "geojson",
        data: tcc
      });

      map.addLayer({
          id: "TCC",
          type: "fill",
          source: "TCC", 
          layout: {},
          paint: {
            "fill-color": "#A52A2A", 
            "fill-opacity": 0.5,
          },
        });

      

      // Add a new layer to visualize the polygon
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(new mapboxgl.FullscreenControl());
    });
  },[]) 

  return (
    <>
    <div id="map" style={{height:"100vh", width:"100%"}}>
    </div>
    </>
  );
}; */