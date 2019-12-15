import React from "react";
import { StyledInput } from "./styledComponents";

// Type is key in onChangeText function in Signin, etc components
export default Input = ({ onChangeText, placeholder, type, ...props }) => {
  return (
    <StyledInput
      autoCapitalize="none"
      autoCorrect={false}
      autoCompleteType="off"
      placeholder={placeholder}
      placeholderTextColor="#a0a0a0"
      // Callback the function to change the state and its value
      onChangeText={value => onChangeText(type, value)}
      {...props}
      // value={text}
    />
  );
};
