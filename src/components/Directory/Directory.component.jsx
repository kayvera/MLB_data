import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import UpcomingGames from "../../components/UpcomingGames/UpcomingGames.component";
import LoginButton from "../../components/LoginButton/LoginButton.component";
import MLBStandings from "../../components/Directory/Directory.component";
//import BattingLeaders from '../../components/BattingLeaders.component";

const Directory = () => {
  return (
    <div>
      <Navbar />
      <UpcomingGames />
      <LoginButton />
      <MLBStandings />
    </div>
  );
};

export default Directory;
