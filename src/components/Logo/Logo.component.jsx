import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  text-align: center;
  vertical-align: top;
  font-family: roboto;
`;

const Logo = () => {
  return (
    <Container>
      <h1>MLB FANTASY</h1>
    </Container>
  );
};

export default Logo;
