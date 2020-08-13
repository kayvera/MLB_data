import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: #cd0001;
  height: 50px;
  width: 150px;
  margin-right: 75px;
  padding: 0;
  z-index: 0;
  font-size: 18px;
  font-family: Roboto;
  color: white;
  border: none;
  float: right;

  &:hover {
    background-color: black;
    color: white;
    transform: translateY(1px);
    filter: saturate(150%);
    opacity: 0.8;
  }
  &:active {
  }
`;
