import React, { Component } from "react";
import {
  UpcomingGamesContainer,
  CardContainer,
  TableContainer,
  Header,
  Row,
  TeamData,
  GameData,
} from "./UpcomingGames.styles";

import { fetchData } from "../../api";

class UpcomingGames extends Component {
  
  async componentDidMount() {
    const data = await fetchData();

    console.log(data)
    }
  

  render() {
    return (
      <UpcomingGamesContainer>
        <Header>Upcoming Games</Header>
        <CardContainer>
          <TableContainer>
            <Row>
              <TeamData>Logo 1</TeamData>
              <GameData rowSpan="2"></GameData>
            </Row>
            <Row>
              <TeamData>Logo 2</TeamData>
            </Row>
          </TableContainer>
        </CardContainer>
      </UpcomingGamesContainer>
    );
  }


export default UpcomingGames;
