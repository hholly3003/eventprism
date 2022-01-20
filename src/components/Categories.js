import React from "react";
import styled from "styled-components";

const Categories = () => {
  return (
    <div>
      <Container>
        <Selections>
          <All></All>
          <One></One>
          <Two></Two>
          <Three></Three>
          <Four></Four>
          <Five></Five>
          <Six></Six>
          <Seven></Seven>
          <Eight></Eight>
          <Nine></Nine>
          <Ten></Ten>
        </Selections>
      </Container>
      ;
    </div>
  );
};

export default Categories;

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: purple;
`;

const Selections = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const All = styled.button``;

const One = styled.button``;

const Two = styled.button``;

const Three = styled.button``;

const Four = styled.button``;

const Five = styled.button``;

const Six = styled.button``;

const Seven = styled.button``;

const Eight = styled.button``;

const Nine = styled.button``;

const Ten = styled.button``;
