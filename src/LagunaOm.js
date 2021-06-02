import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import adp from "./Data/LagunaOm/ADP.geojson";
import cv from "./Data/LagunaOm/Cobertura_Vegetal.geojson";
import ff from "./Data/LagunaOm/Flora_Fauna.geojson";
import lb from "./Data/LagunaOm/Localidades_Beneficiadas.geojson";
import tcc from "./Data/LagunaOm/Ton_CO2_carbono.geojson";

// console.log(dates)

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ";

export default function LagunaOm() {
  const [pageIsMounted, setPageIsMounted] = useState(false);

  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [-89.15095099588774, 18.701800462540451],
      zoom: 10,
    });
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
        },
      });

      // coverage map, rendering more style

      map.addSource("coverage", {
        type: "geojson",
        data: cv,
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
        data: ff,
      });

      map.addLayer({
        id: "FF",
        type: "circle",
        source: "FF",
        layout: {},
        paint: {
          "circle-radius": 8,
          "circle-color": "rgb(128, 0, 0)",
        },
      });

      // localities map, rendering more style

      map.addSource("LB", {
        type: "geojson",
        data: lb,
      });

      map.addLayer({
        id: "LB",
        type: "circle",
        source: "LB",
        layout: {},
        paint: {
          "circle-radius": 5,
          "circle-color": "rgb(0, 0, 0)",
        },
      });

      map.addSource("TCC", {
        type: "geojson",
        data: tcc,
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
  }, []);

  return (
    <>
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <div id="map" style={{ height: "100vh", width: "100%" }}></div>
    </>
  );
}
