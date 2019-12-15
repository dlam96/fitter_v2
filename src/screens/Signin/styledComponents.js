import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: black;
  padding-left: 10%;
  padding-right: 10%;
`;

export const HeaderView = styled.View`
  /* flex: 1; */
  /* border-bottom: 3px solid gold; */
  /* padding-top: 40%; */
  /* padding-bottom: 10%; */
  /* margin-bottom: 10%; */
`;

export const HeaderText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 1;
  color: white;
  border-style: solid;
  border-bottom-color: gold;
  border-bottom-width: 3px;
  text-align: center;
`;
export const AnimationView = styled.View`
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 64px;
  margin-left: 32px;
  /* height: 25%; */
`;

export const ErrorContainer = styled.Modal`
  z-index: 10;
  /* background-color: red; */
  width: 75%;
  height: 50%;
  align-self: center;
  justify-content: center;
`;
export const ErrorWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
`;
export const ErrorView = styled.View`
  width: 300px;
  height: 130px;
  border-radius: 5;
  background-color: red;
  margin-top: 10%;
  /* text-align: center; */
`;

export const ErrorText = styled.Text`
  color: white;
  font-size: 15px;
  /* text-align: center; */
  margin: 5% 5% 5% 5%;
`;
