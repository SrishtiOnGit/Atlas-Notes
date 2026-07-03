import { MapContainer, TileLayer } from "react-leaflet";

const WorldMap = () => {
  return (
    <div>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{
          height: "500px",
          width: "80%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default WorldMap;
