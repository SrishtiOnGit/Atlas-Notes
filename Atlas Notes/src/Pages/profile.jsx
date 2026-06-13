import React from "react";
import "/src/Styles/profile.css";

const Profile = () => {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="avatar">
          🌍
        </div>

        <h2>Explorer</h2>

        <p>
          Passionate about discovering
          cultures around the world.
        </p>

        <div className="stats">

          <div>
            <h3>12</h3>
            <p>Saved</p>
          </div>

          <div>
            <h3>8</h3>
            <p>Countries</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;