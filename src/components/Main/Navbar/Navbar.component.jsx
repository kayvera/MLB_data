import React from "react";
import styled from "styled-components";
import LoginButton from "../LoginButton/LoginButton.component";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  height: 108px;
`;

const Navbar = () => {
  return (
    <Container>
      <LoginButton />
    </Container>
  );
};

export default Navbar;
