import Sidebar from "../components/sidebar";
import WorldMap from "../components/worldmap";
import "../styles/map.css";

function Map() {
  return (
    <div className="maps">
      <Sidebar />

      <main className="map-content">
        <h2>Explore the World 🌍</h2>
        <WorldMap />
      </main>
    </div>
  );
}
export default Map;
