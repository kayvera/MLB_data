import React from "react";
import {
  UpcomingGamesContainer,
  CardContainer,
  TableContainer,
  // ImageContainer,
  // TimeContainer,
  Header,
} from "./UpcomingGames.styles";

//let rows = [] // async function later, we will be fetching from api; map function

const UpcomingGames = () => {
  return (
    <UpcomingGamesContainer>
      <Header>Upcoming Games</Header>
      <CardContainer>
        <TableContainer></TableContainer>
      </CardContainer>
    </UpcomingGamesContainer>
  );
};

export default UpcomingGames;
