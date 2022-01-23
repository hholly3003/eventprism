import React from 'react';
import styled from "styled-components";
import HomeBar from '../components/Homebar';

function Homepage() {
  return (
    <div>
      <HomeBar
        text="Login"
        href="/login"
      />

    </div>
  );
}

export default Homepage;

const Container = styled.div`
  height: 100px;
  width: 100px;
  background-color: beige;
`;