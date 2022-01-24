import React from "react";
import styled from "styled-components";
import EventsList from "../components/EventsList";
import HomeBar from "../components/Homebar";

function Homepage() {
  return (
    <div>
      <HomeBar text="Login" href="/login" />
      <EventsList />
    </div>
  );
}

export default Homepage;

const Container = styled.div`
  height: 100px;
  width: 100px;
  background-color: beige;
`;
