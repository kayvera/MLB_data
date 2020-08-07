import React from "react";
import styled from "styled-components";
import Profile from "../Profile/Profile.component";
import Menu from "../Menu/Menu.component";
import Logo from "../Logo/Logo.component";
import { GlobalStyles } from "../../styles/global";

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <Container>
      <GlobalStyles />
      <Logo />
      <Profile />
      <Menu />
    </Container>
  );
};

export default Sidebar;
