import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.component";
import Header from "../components/Header/Header.component";
import UpcomingGames from "../components/UpcomingGames/UpcomingGames.component";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <UpcomingGames />
    </div>
  );
};

export default Home;
