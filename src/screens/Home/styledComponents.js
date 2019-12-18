import styled from "styled-components/native";
import { Dimensions } from "react-native";

const fullWidth = Dimensions.get("window").width;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: black;
`;

export const CardsContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: black;
  padding-top: 20%;
  padding-left: 6%;
  padding-right: 5%;
  /* align-content: center; */
  /* justify-content: center; */
`;

export const MatchedModal = styled.Modal`
  /* z-index: 10; */
  width: 100%;
  height: 100%;
`;
export const MatchedWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding-left: 5%;
  padding-right: 5%;
`;

export const MatchedHeading = styled.Text`
  color: ${props => props.inputColor || "gold"};
  font-size: 20;
  text-align: center;
`;
export const MatchedTitle = styled.Text`
  color: gold;
  font-weight: bold;
  font-size: 30;
  letter-spacing: 1;
`;

export const ButtonText = styled.Text`
  /* justify-content: center; */
  /* justify-self: auto; */
  font-size: 20;
  letter-spacing: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: black;
  padding-bottom: 10%;
`;

export const IconContainer = styled.View`
  height: 55px;
  width: 200px;
  background-color: gold;
  /* padding-top: 10%; */
  margin: 10% 0 0 0;
  align-items: center;
  justify-content: center;
  border-radius: 100;
`;
