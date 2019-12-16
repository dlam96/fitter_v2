/* eslint-disable react/prop-types */
import React from "react";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Container, Tracker, Circle } from "./styledComponents";
import Icon from "../Icon";

const IntroFooter = ({ navigation }) => {
  const indexOfCurrentScreen = navigation.state.index;
  const nameOfScreen = index => navigation.state.routes[index].routeName;
  const nameOfNextScreen = () =>
    indexOfCurrentScreen !== 5
      ? navigation.navigate(nameOfScreen(indexOfCurrentScreen + 1))
      : navigation.navigate("MainApp");
  // boolean if the index is current screen index then true
  const trackerColor = indexOfComp => indexOfCurrentScreen === indexOfComp;
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("MainApp")}>
        <Icon iconName="home" />
      </TouchableOpacity>
      <Tracker>
        {[0, 1, 2, 3, 4, 5].map(indexOfComp => (
          <Circle key={indexOfComp} color={trackerColor(indexOfComp)} />
        ))}
      </Tracker>
      <TouchableOpacity onPress={nameOfNextScreen}>
        <Icon iconName={indexOfCurrentScreen === 5 ? "check" : "arrowright"} />
      </TouchableOpacity>
    </Container>
  );
};
export default withNavigation(IntroFooter);
