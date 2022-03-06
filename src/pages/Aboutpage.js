import React from "react";
import HomeBar from "../components/Homebar";
import "../styles/Aboutpage.css";
import logoR from '../images/image.png'
const Aboutpage = ({setIsLogged}) => {
  return (
    <div className="about-container">
      <div className="hombe-bar">
        <HomeBar 
          setIsLogged={setIsLogged}
        />
      </div>
      <div className="mega-container">
        <div className="logo-container">
            <img src={logoR} id='logoAbout'/>
        </div>
        <div className="main">
          <p className="main-heading">Welcome all to EventPrism.</p>
          <p className="main-sub-heading">Come dive in with us on our journey to improve user experience.</p>
          <div className="main-points">
            <div className="main-point-title">
              <p>To begin, let's paint a picture:</p>
            </div>
            <div className="main-point-info">
              <p>
                {" "}
                You are going out of town or let's say you just simply want to get out of the house and find something to do while you have some free time. 
                You aren't too familiar with the area or maybe you are but you are curious with what's going on in your area. You go online and see a million 
                and one event finders, what do you do? with so many options it can become quite overwhelming. Then you stumble across one that catches your 
                eye. Was it the colors? Was it the name? You can't say but you decided to click on it. What have you found? Why it was none-other than 
                EventPrism. The event-finder for the people by the people. You skim through it and you find some events near you that you didn't realize was 
                happening. You click on it, look through the information and decide you want to do it. You see how easy it is to reserve the event and can even 
                login to save it in case you need to go back to look at the event. Here at EventPrism we believe in a smooth experience, an eye pleasing 
                oportunity to keep the people in the loop you could say.{" "}
              </p>
            </div>
            <div className="main-point-title">
              <p>How was EventPrism founded?</p>
            </div>
            <div className="main-point-info">
              <p>
                {" "}
                Well, a group of wonderfully talented programmers took it upon themselves to endlessly ponder on the questions so many have thought before 
                them. How can they make it so that people can get what they need as easy as a snap of a finger? After careful research and planning a lightbulb 
                lit up! What if they made an event finder that was simple and fun to use? Something that anyone could enjoy no matter what age they were.{" "}
              </p>
            </div>
            <div className="main-point-title">
              <p>Our creators:</p>
            </div>
            <div className="main-point-info">
              <p>
                {" "}
                Holly, Carlos, Isaiah, and Luna are happy to roll up their sleeves to oversee the success of the demand for the people's enjoyment. No matter 
                the challenge that may arise, we are here at EventPrism are ready to tackle the challenge. Alone we as a society are powerful but together we, 
                the people, can become an unstoppable force once brought together. {" "}
              </p>

            </div>
          </div>
          <div className="main-point-title">
            <p>EventPrism- For the people by the people, Thank you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
