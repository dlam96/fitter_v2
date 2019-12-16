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
  position: absolute;
  top: 1;
  left: 0;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
export const TopRightButton = styled.View`
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
  height: 70%;
`;
export const Wrapper = styled.View`
  flex: 1;
  align-self: center;
  width: 90%;
  height: 30%;
  background-color: transparent;
  margin-top: 5%;
`;
export const NameView = styled.View`
  flex: 1;
  flex-direction: row;
  /* width: 90%; */
  /* margin-top: 5%; */
  /* border-radius: 30; */
  align-self: center;
  background-color: black;
  /* height: 20px; */
  /* text-align: center; */
  /* justify-content: flex-start; */
  width: 100%;
`;

export const NameInput = styled.TextInput`
  color: gold;
  font-size: 30px;
  letter-spacing: 1;
  width: 30%;
  font-weight: bold;
  /* height: 100%; */
  /* padding: 3% 0 5% 0; */
  /* margin: 10% 0 0 0; */
`;

export const AgeText = styled.Text`
  font-size: 30px;
  color: gold;
  letter-spacing: 0.5;
  align-self: center;
  /* text-align: center; */
`;

export const DescriptionView = styled.View`
  flex: 1;
  flex-direction: row;
  /* width: 90%; */
  /* margin-top: 5%; */
  /* border-radius: 30; */
  align-self: flex-start;
  /* height: 20px; */
  /* justify-content: top; */
  width: 100%;
`;
export const DescriptionInput = styled.TextInput`
  color: gray;
  font-size: 15px;
  letter-spacing: 1;
  height: 100%;
  width: 100%;
  padding-bottom: 15%;

  /* padding: 3% 0 5% 0; */
  /* margin: 10% 0 0 0; */
`;
