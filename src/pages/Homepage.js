import React from "react";
import EventsList from "../components/EventsList";
import HomeBar from "../components/Homebar";
import '../styles/LandingPageDesign.css';

function Homepage() {
  function redirectLogin() {
    window.location = "/login";
  }
  return (
    <div className="homepage-container">
      <div id="landingBGDesign">
        <img src="./Landing-Image.png" alt="Silhouette Crowd People" />
      </div>
      <div id="logo">
        <img id="logo-image" src='./unnamed.png' alt="EventPrism Logo" />
      </div>
      <div id="login-bttn">
        <button id='fade-in-fade-out' onClick={redirectLogin}>Click here to Enter</button>
      </div>
    </div>
  );
}

export default Homepage;