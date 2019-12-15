import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
  View
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
  ErrorText,
  ActivityView,
  SubHeaderText,
  IconContainer,
  ButtonText
} from "./styledComponents";
// Animations
import LottieView from "lottie-react-native";
const treadmill = require("../../animations/treadmill.json");
// Location
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
// TODO:
// Fix signin input keyboard blocking
// Setup redux
// Location send to loading
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      latitude: 0,
      longitude: 0,
      errorLocation: false,
      isLoading: false,
      input: "",
      errorAuth: false,
      modalVisible: false,
      keyboardOpened: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this._getLocationAsync = this._getLocationAsync.bind(this);
  }
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }
  // Keyboard dismiss logic function
  _keyboardDidShow = () => {
    this.setState({ keyboardOpened: true });
  };
  _keyboardDismiss = () => {
    if (this.state.keyboardOpened) {
      console.log("Dismissing keyboard");
      Keyboard.dismiss();
      this.setState({ keyboardOpened: false });
    }
  };
  onSubmit = async () => {
    // console.log(
    //   "Submitting: " + this.state.email + " and " + this.state.password
    // );
    await this._getLocationAsync();
    // reset error flags
    this.setState({
      isLoading: false,
      errorLocation: false,
      errorAuth: false,
      modalVisible: false
    });
    if (this.state.email == "" || this.state.password == "") {
      this.setState({ errorAuth: true, modalVisible: true });
      return;
    }
    this.props.navigation.navigate("Loading", {
      request: "signin",
      email: this.state.email,
      password: this.state.password,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    });
  };
  onChangeText = (key, value) => {
    // console.log("Change in text detected");
    this.setState({
      [key]: value
    });
  };
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  _getLocationAsync = async () => {
    this.setState({ isLoading: true });
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({ errorLocation: true });
      console.log("Permission to access location was denied");
      return;
    }

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      this.setState({ errorLocation: true });
      return;
    }

    let location = await Location.getCurrentPositionAsync({}).catch(
      this.setState({ errorLocation: true })
    );

    this.setState({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude
    });
    // this.onContinue("location");
    this.setState({ isLoading: false });
  };
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this._keyboardDismiss}
        accessible={false}
        touchSoundDisabled={true}
      >
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
          <ActivityView>
            <SubHeaderText>
              By tapping Sign In, you agree with our Terms of Service and
              Privacy Policy
            </SubHeaderText>

            {/* Custom Button */}
            <TouchableOpacity onPress={this.onSubmit}>
              <IconContainer>
                <View>
                  <ActivityIndicator
                    size="large"
                    color="black"
                    animating={this.state.isLoading}
                  />
                </View>
                <ButtonText>Sign In</ButtonText>
              </IconContainer>
            </TouchableOpacity>
          </ActivityView>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

// export default Signin;
