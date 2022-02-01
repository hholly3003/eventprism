import React from "react";
import EventsList from "../components/EventsList";
import HomeBar from "../components/Homebar";
import '../styles/LandingPageDesign.css';
// import peopleImg from '../images/Landing-Image.png'
import logoLanding from '../images/image.png'

function Homepage() {
  function redirectLogin() {
    window.location = "/login";
  }
  return (
    <div className="homepage-container">
      <div className="sub-container-landing">
        <div className="logo-btn-conatainer">
          <div className="logo-container-landing">
            <img id="logo-image-landing" src={logoLanding} alt="EventPrism Logo" />
          </div>
          <div className="login-btn-landing">
            <button id='fade-in-fade-out' onClick={redirectLogin}>Click here to Enter</button>
          </div>
        </div>
        <div className="landingBGDesign">
          {/* <img src={peopleImg} alt="Silhouette Crowd People" id="people-img"/> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;