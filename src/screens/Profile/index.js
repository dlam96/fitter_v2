import React, { Component } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from "react-native";
import {
  Top,
  TopLeftButton,
  Container,
  ProfilePicture
} from "./styledComponents";
import { Ionicons } from "@expo/vector-icons";

class Profile extends Component {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }
  /* ============================
  Keyboard dismiss logic function 
  ==============================*/
  _keyboardDidShow = () => {
    this.setState({ keyboardOpened: true });
  };
  _keyboardDismiss = () => {
    if (this.state.keyboardOpened) {
      // console.log("Dismissing keyboard");
      Keyboard.dismiss();
      this.setState({ keyboardOpened: false });
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        touchSoundDisabled={true}
      >
        <Container>
          <ProfilePicture
            source={require("../../../assets/headshots/flanders.png")}
            imageStyle={{ borderRadius: 30 }}
          >
            <Top>
              <TouchableOpacity>
                <TopLeftButton>
                  <Ionicons name="ios-settings" size={40} color="black" />
                </TopLeftButton>
              </TouchableOpacity>
            </Top>
          </ProfilePicture>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}
export default Profile;
