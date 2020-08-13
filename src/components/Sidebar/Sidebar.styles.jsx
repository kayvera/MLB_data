import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100%;
  width: 271px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #002d72;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const ProfileContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const ProfileImg = styled.img`
  height: 7rem;
`;
export const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  line-height: 28px;
  position: center;
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
`;
export const Points = styled.h2`
  font-size: 12px;
  line-height: 28px;
  position: center;
  color: #ffffff;
  font-family: Roboto;
  font-style: regular;
  font-weight: light;
`;

export const Logo = styled.div`
  font-family: roboto;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  text-decoration: none;
`;

export const LogoContainer = styled.div`
  margin-top: 3rem;
  margin-left: 30px;
  font-weight: bold;
  position: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const NavigationMenu = styled.div`
  font-family: roboto;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  text-align: center;
`;

export const MenuLinks = styled.div`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 15px;
  display: inline-block;
  margin-top: 30px;
  &:hover {
    transform: translateY(1px);
    filter: saturate(150%);
    opacity: 0.8;
    background-color: #001637;
  }
`;

export const icon = {
  minWidth: "45px",
  verticalAlign: "middle",
  display: "inline-flex",
};
