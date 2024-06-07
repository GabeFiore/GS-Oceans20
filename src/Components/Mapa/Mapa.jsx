import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import dadosPoluicao from "./poluicao.json";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function Mapa({ title }) {
  return (
    <div className="mapa">
      <h2>{title}</h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
        maxBounds={[
          [85, -180],
          [-85, 180],
        ]}
        maxBoundsViscosity={1.0}
        minZoom={2}
        maxZoom={18}
        scrollWheelZoom={true}
        worldCopyJump={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true}
        />
        {dadosPoluicao.map((data) => (
          <Marker key={data.id} position={data.position}>
            <Popup>{data.description}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;
