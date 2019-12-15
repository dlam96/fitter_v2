import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input } from "../../components";
import {
  HeaderView,
  HeaderText,
  Container,
  AnimationView,
  ErrorContainer,
  ErrorWrapper,
  ErrorView,
  ErrorText
} from "./styledComponents";

import LottieView from "lottie-react-native";
const treadmill = require("../../animations/treadmill.json");

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      input: "",
      errorAuth: false,
      modalVisible: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  onSubmit = () => {
    console.log(
      "Submitting: " + this.state.email + " and " + this.state.password
    );
    // reset error flags
    this.setState({ errorAuth: false, modalVisible: false });
    if (this.state.email == "" || this.state.password == "") {
      this.setState({ errorAuth: true, modalVisible: true });
      return;
    }
  };
  onChangeText = (key, value) => {
    console.log("Change in text detected");
    this.setState({
      [key]: value
    });
  };
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <AnimationView>
            <LottieView
              source={treadmill}
              autoPlay
              style={{ width: 180, height: 180 }}
              resizeMode="cover"
            />
          </AnimationView>
          <HeaderView>
            <HeaderText>
              {/* <Ionicons name="ios-fitness" size={40} /> */}
              Fitter
            </HeaderText>
          </HeaderView>
          {/* Error Message */}
          {this.state.errorAuth && (
            <ErrorContainer
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <ErrorWrapper>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <ErrorView>
                    <ErrorText>
                      Invalid Email or Password.
                      {"\n\n"}
                      Tap to dismiss.
                    </ErrorText>
                  </ErrorView>
                </TouchableOpacity>
              </ErrorWrapper>
            </ErrorContainer>
          )}
          {/* Custom text input, type is state (key) in onChangeText function */}
          <Input
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChangeText={this.onChangeText}
            required
          />
          <Input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChangeText={this.onChangeText}
            secureTextEntry
            required
          />
          <Button title="Sign In" onPress={this.onSubmit} />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

// export default Signin;
