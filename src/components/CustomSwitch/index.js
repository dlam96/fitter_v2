import React from "react";
import { Switch } from "react-native";
import { Container, SwitchText } from "./styledComponents";

export default CustomSwitch = ({ title, onPress, value }) => {
  return (
    <Container>
      <SwitchText>{title}</SwitchText>
      <Switch
        thumbColor={"gold"}
        trackColor={{ false: "white", true: "gold" }}
        onValueChange={onPress}
        value={value}
      />
    </Container>
  );
};
