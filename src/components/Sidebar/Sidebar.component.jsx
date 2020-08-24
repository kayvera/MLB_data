import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarContainer,
  LogoContainer,
  Logo,
  ProfileImg,
  ProfileName,
  ProfileContainer,
  Points,
  NavigationMenu,
  MenuLinks,
  icon,
} from "./Sidebar.styles";

import {
  HomeIcon,
  PeopleAltIcon,
  ListAltIcon,
  AnnouncementIcon,
  Image,
} from "./index.js";

const Sidebar = ({ name, points }) => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo exact as={Link} to="/">
          MLB FANTASY
        </Logo>
      </LogoContainer>
      <ProfileContainer>
        <ProfileImg src={Image} />
        <ProfileName>Name</ProfileName>
        <Points>Points: Points</Points>
      </ProfileContainer>
      <NavigationMenu>
        <MenuLinks exact as={Link} to="/">
          <HomeIcon style={icon} />
          HOME
        </MenuLinks>
        <MenuLinks as={Link} to="/players">
          <PeopleAltIcon style={icon} />
          PLAYERS
        </MenuLinks>
        <MenuLinks as={Link} to="/roster">
          <ListAltIcon style={icon} />
          ROSTER
        </MenuLinks>
        <MenuLinks as={Link} to="/news">
          <AnnouncementIcon style={icon} />
          NEWS
        </MenuLinks>
      </NavigationMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
