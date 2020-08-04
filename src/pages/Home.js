import React from "react";
import Main from "../components/Main/Main.component";
import Sidebar from "../components/Sidebar/Sidebar.component";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";

const Home = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <Sidebar />
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default Home;
