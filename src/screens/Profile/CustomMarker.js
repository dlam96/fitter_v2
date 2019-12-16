import React from "react";
import { StyleSheet, Image } from "react-native";

class CustomMarker extends React.Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={require("../../../assets/goldbg.png")}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 15,
    width: 15,
    borderRadius: 8
  }
});

export default CustomMarker;
