import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const fullWidth = Dimensions.get("window").width;

export const CardView = styled.View`
  /* height: 100%; */
  background-color: white;
  border-radius: 10;
  align-items: center;
  /* align-self: center; */
  justify-content: center;
  align-content: center;
  padding-top: 10%;
  /* margin-left: 5%; */
  width: ${fullWidth - 40};
  /* margin-left: 2%; */
`;

export const ImageView = styled.Image`
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  width: 90%;
  height: 320px;
  padding-top: 20px;
  align-self: center;
  /* width: ${props => (props.variant ? "70%" : "90%")}; */
  /* height: ${props => (props.variant ? "70%" : "90%")}; */
  /* margin: ${props => (props.variant ? "0" : "20")}; */
  margin-bottom: 0;
`;
export const MatchView = styled.View`
  /* flex: 1; */

  margin-top: -3%;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 20;
  background-color: gold;
`;
export const MatchText = styled.Text`
  font-size: 15;
  color: black;
  text-align: center;
  align-self: center;
  font-weight: bold;
`;
export const NameText = styled.Text`
  padding-top: 5;
  font-size: 22;
  color: black;
  text-align: center;
  align-self: center;
`;
export const NameContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  width: 90%;
  height: 100;
  color: black;
  background-color: black;
`;
export const DescriptionText = styled.Text`
  color: gray;
  font-size: 12;
  text-align: center;
  padding-bottom: 3%;
`;
export const ActionsView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 3%;
  margin-bottom: 5%;
`;

export const ActionsButton = styled.TouchableOpacity`
  width: 50;
  height: 50;
  border-radius: 25;
  background-color: gold;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
  margin-right: 3%;
`;
