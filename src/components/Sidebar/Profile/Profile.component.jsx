import React from "react";
import styled from "styled-components";
import Image from "../../../assets/images/profileimage.png";

const Container = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const ProfileImg = styled.img`
  height: 6rem;
`;
const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  line-height: 28px;
  position: center;
  color: ${({ theme }) => theme.textColor};
  font-family: Roboto;
  font-style: normal;
`;
const Points = styled.h2`
  font-size: 12px;
  line-height: 28px;
  position: center;
  color: ${({ theme }) => theme.textColor};
  font-family: Roboto;
  font-style: regular;
  font-weight: light;
`;

const Profile = () => {
  return (
    <Container>
      <ProfileImg src={Image} />
      <ProfileName>Mikayla Rivera</ProfileName>
      <Points>Points: 32,087</Points>
    </Container>
  );
};

export default Profile;
