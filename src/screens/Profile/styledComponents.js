import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: black;
  padding-top: 10%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Top = styled.View`
  z-index: 10;
  /* margin-top: 5%; */
  /* margin-left: 3%; */
  position: absolute;
  top: 1;
  left: 0;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TopLeftButton = styled.View`
  height: 55px;
  width: 55px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border-radius: 100;
`;

export const ProfileContainer = styled.View`
  flex: 1;
`;

export const ProfilePicture = styled.ImageBackground`
  align-self: center;
  width: 100%;
  height: 400;
`;
