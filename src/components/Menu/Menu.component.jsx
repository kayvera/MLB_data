import React from "react";
import MenuLink from "../MenuLink/MenuLink.component";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  return (
    <Container>
      <MenuLink title="Home" icon={"home"} />
      <MenuLink title="Roster" icon={"file-multiple"} />
      <MenuLink title="Players" icon={"gift"} />
      <MenuLink title="News" icon={"bank"} />
    </Container>
  );
};

export default Menu;
