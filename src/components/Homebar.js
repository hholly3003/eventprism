import React from "react";
import "../styles/Homebar.css";

function HomeBar({ text, href }) {
  return (
    <div className="home-bar">
      <p>EventPrism</p>
      <div className="links">
        <p>Home</p>
        <p>About</p>
      </div>
      <a href={href}>{text}</a>
    </div>
  );
}

export default HomeBar;
