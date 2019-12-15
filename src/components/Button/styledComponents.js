import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const IconContainer = styled.View`
  height: 55px;
  width: 100%;
  background-color: gold;
  /* padding-top: 10%; */
  margin: 10% 0 0 0;
  align-items: center;
  justify-content: center;
  border-radius: 100;
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

export const ExpoIcon = styled(Ionicons)`
  font-size: 24;
`;
