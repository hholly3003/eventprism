import React from "react";
import EventsList from "../components/EventsList";
import HomeBar from "../components/Homebar";

function Homepage() {
  return (
    <div className="homepage-container">
      <HomeBar 
        text="Login"
        href="/login" />
      <EventsList />
    </div>
  );
}

export default Homepage;
