import React, { useState, useEffect } from "react";
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import adp from './Data/NuevoBecal/ADP.geojson'
import cv from './Data/NuevoBecal/ADP.geojson'
import ff from './Data/NuevoBecal/ADP.geojson'
import lb from './Data/NuevoBecal/ADP.geojson'
import tcc from './Data/NuevoBecal/ADP.geojson'
import mapboxgl from "mapbox-gl"


const layers = {
  "type": "FeatureCollection",
  "features": [{
  "date": "geojson",
  "data":adp,
  "id": "adp",
  "type": "fill",
  "source": "ADP",
  "layout": {},
  "paint": {
    "fill-color": "#0080ff",
    "fill-opacity": 0.5,
  }},{
    "date": "geojson",
    "data":cv,
    "id": "cv",
    "type": "fill",
    "source": "CV",
    "layout": {},
    "paint": {
      "fill-color": "#2E8B57",
          "fill-opacity": 0.5,
  }},
  {
    "date": "geojson",
    "data":ff,
    "id": "ff",
    "type": "circle",
    "source": "FF",
    "layout": {},
    "paint": {
      "circle-radius": 8,
          "circle-color": "rgb(128, 0, 0)",
  }},
  {
    "date": "geojson",
    "data":lb,
    "id": "lb",
    "type": "circle",
    "source": "LB",
    "layout": {},
    "paint": {
      "circle-radius": 5,
          "circle-color": "rgb(0, 0, 0)",
  }},
  {
    "date": "geojson",
    "data":tcc,
    "id": "tcc",
    "type": "fill",
    "source": "TCC",
    "layout": {},
    "paint": {
      "fill-color": "#A52A2A",
          "fill-opacity": 0.5,
  }}
]}


function NuevoBecal() {
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
      <Source id="my-data" type="geojson" data={adp,cv}>
        <Layer {...layers.features[0]} />
        <Layer {...layers.features[1]} />
        <Layer {...layers.features[2]} />
        <Layer {...layers.features[3]} />
        <Layer {...layers.features[4]} />
      </Source>
    </ReactMapGL>
  );
}
export default NuevoBecal;
