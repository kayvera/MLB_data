import React from "react";
import Directory from "../components/Directory/Directory.component";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Directory />
      </div>
    </ThemeProvider>
  );
};

export default Home;
