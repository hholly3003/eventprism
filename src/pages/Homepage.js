import React from "react";
import EventsList from "../components/EventsList";
import HomeBar from "../components/Homebar";

function Homepage() {
  function redirectLogin(){
    window.location = "/login"
  }
  return (
    <div className="homepage-container">
      <HomeBar 
        text="Login"
        btnFunction={redirectLogin} />
      {/* <EventsList /> */}
    </div>
  );
}

export default Homepage;
