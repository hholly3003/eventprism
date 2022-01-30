import { onSnapshot, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import db, { auth } from "../utils/firebase";
import styled from "styled-components";
import Event from "../components/Event";
import EventsList from "../components/EventsList";
import HomeBar from "../components/Homebar";
import '../styles/Dashboard.css'
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
// import UserInput from "..components/UserInput";

function Dashboard({setIsLogged, isLogged}) {
  const [user, setUser] = useState({});
  const [filteredEvents, setFilteredEvents] = useState("all");
  console.log(isLogged);
  //getting the object only of the active user or user who is signed in
  useEffect(() => {
    // Authenticate the user and only user who has signed in can access dashboard
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser?.uid) {
        setUser(currentUser.uid);
      } else {
        alert.message("Please Login")
        window.location = "/login"
      }
    });
    //Getting the data from the firestore
    onSnapshot(
      doc(db, "users", `${user}`),
      (snapshot) => {
        let events = snapshot
          .data()
          .events.map((event, id) => ({ ...event, id: id }));
        setFilteredEvents(events);
      },
      [filteredEvents]
    );
  },[]);
  return (
    <div className="dashboard">
      
      <EventsList setIsLogged={setIsLogged}/>

    </div>
  );
}

export default Dashboard;
