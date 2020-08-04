import React from "react";
import Navbar from "./Navbar/Navbar.component";
import UpcomingGames from "./UpcomingGames/UpcomingGames.component";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e8e4e4;
  height: 53.8rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  align-content: right;
`;

const Main = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <UpcomingGames />
      </Container>
    </div>
  );
};

export default Main;
