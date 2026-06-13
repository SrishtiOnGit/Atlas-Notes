import React from "react";
import "../Styles/settings.css";

const Settings = () => {
  return (
    <div className="settings-page">

      <h1>⚙️ Settings</h1>

      <div className="settings-card">

        <label>
          Theme
        </label>

        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>

        <label>
          Language
        </label>

        <select>
          <option>English</option>
          <option>French</option>
          <option>Japanese</option>
        </select>

      </div>

    </div>
  );
};

export default Settings;