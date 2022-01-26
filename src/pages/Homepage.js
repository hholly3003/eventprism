import React from "react";
import EventsList from "../components/EventsList";
import HomeBar from "../components/Homebar";

function Homepage() {
  function redirectLogin() {
    window.location = "/login";
  }
  return (
    <div className="homepage-container">
      <h1>Welcome</h1>
      <button onClick={redirectLogin}>Login</button>
    </div>
  );
}

export default Homepage;
