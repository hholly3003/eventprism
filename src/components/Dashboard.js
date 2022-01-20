import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Event from "./Event";

const Dashboard = ({ events }) => {
  return (
    <div>
      <Container>
        <Header>
          <HeaderLeft>
            <Logo>Logo</Logo>
            <SearchBar></SearchBar>
          </HeaderLeft>
          <HeaderRight>
            <SignIn>Sign In</SignIn>
          </HeaderRight>
        </Header>
        <Main>
          <PickLocation>
            <CatchPhrase>Trending in</CatchPhrase>
            <Location></Location>
          </PickLocation>
          <Categories />
          <Events>
            {events.map((event) => {
              return <Event />;
            })}
          </Events>
        </Main>
      </Container>
    </div>
  );
};

export default Dashboard;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: blue;
  overflow: scroll;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  padding: 25px;
  width: 100%;
  display: flex;
`;

const Logo = styled.a`
  padding: 0 15px 0 0;
  font-size: 25px;
`;

const SearchBar = styled.input`
  flex: 1;
  height: 30px;
`;

const HeaderRight = styled.div`
  padding: 25px;
  width: 100px;
`;

const SignIn = styled.button`
  padding: 15px;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
`;

const PickLocation = styled.div`
  height: 50px;
  width: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  padding: 25px;
`;

const CatchPhrase = styled.div`
  padding: 0 15px 0 0;
  font-size: 25px;
`;

const Location = styled.input`
  border: none;
  outline: none;
  /* background: transparent; */
  flex: 1;
`;

const Events = styled.div`
  max-width: 1500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 15px;
`;
