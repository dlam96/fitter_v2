import React from "react";
import { TouchableOpacity } from "react-native";
import { IconContainer, ExpoIcon, ButtonText } from "./styledComponents";

export default Button = ({ iconName, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconContainer>
        <ButtonText>
          <ExpoIcon name={iconName} /> {title}
        </ButtonText>
      </IconContainer>
    </TouchableOpacity>
  );
};
