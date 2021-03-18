import React from "react";
import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from "react-leaflet";
import reflot from "./../data/reflot.json";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import landValueRange from './../utils/landValueRange'

const CENTER_POINT = [13.82826268357157, 100.558089583016496]

const MyMap = () => {

  const onEachLand = (land, layer) => {
    const landValue = land.properties.LAND_VALUE;
    layer.bindPopup(`<h4>${landValue}</h4>`);
    const colorByRange = landValueRange(landValue)
    layer.options.fillColor = colorByRange
    layer.options.color = colorByRange
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Reference land Map</h1>
      <MapContainer
        style={{ height: "80vh" }}
        zoom={14}
        center={CENTER_POINT}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={CENTER_POINT}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            <div>select land</div>
          </Popup>
        </Marker>
        <GeoJSON
          style={{
            fillOpacity: 0.5,
          }}
          data={reflot.features}
          onEachFeature={onEachLand}
        />
      </MapContainer>
    </div>
  );
};

export default MyMap;
