import "../styles/profile.css";
import Sidebar from "../components/sidebar";
import { FaUser } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="profile-container">
      <Sidebar />

      <main className="profile-content">
        <FaUser className="profile-icon" />
        <h2>Traveller</h2>
        <p>@AtlasNotes-user</p>
      </main>
    </div>
  );
};

export default Profile;
