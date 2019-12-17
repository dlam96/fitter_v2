import React, { Component } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input } from "../../components";
import { CustomButton } from "./styledComponents";
import {
  HeaderView,
  HeaderText,
  SubHeaderText,
  RegularView,
  RegularText,
  SummaryView,
  SummaryText,
  SummaryMainHeader,
  SummaryHeader,
  ErrorContainer,
  ErrorWrapper,
  ErrorView,
  ErrorText,
  Top,
  TopLeftButton,
  Container,
  ButtonContainer,
  ButtonText,
  AnimationView,
  AnimationHeaderView,
  AnimationHeaderText
} from "./styledComponents";
// See https://github.com/xgfe/react-native-datepicker
import DatePicker from "react-native-datepicker";
// Animation
import LottieView from "lottie-react-native";
const dumbell = require("../../animations/dumbell_alt.json");
const locationAnimation = require("../../animations/location.json");
// Location
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

// TODO:
// Setup redux
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      birthday: "",
      gender: "",
      index: 0,
      input: "",
      // Geolocation
      longitude: 0,
      latitude: 0,
      errorFirstName: false,
      errorLastName: false,
      // errorEmail checks if null field,
      // isEmail checks if valid email address
      errorEmail: false,
      isEmail: true,
      errorLocation: false,
      errorPassword: false,
      isLoading: false
    };
    this.onContinue = this.onContinue.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this._getLocationAsync = this._getLocationAsync.bind(this);
    this.onVerify = this.onVerify.bind(this);
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
  // Used to re-render the screen when press on tab from Auth routes index.js
  UNSAFE_componentWillReceiveProps() {
    this.setState({ index: 0 });
  }
  onContinue(type) {
    // Reset error flags
    this.setState({
      modalVisible: false,
      isEmail: true,
      errorFirstName: false,
      errorLastName: false,
      errorEmail: false,
      errorLocation: false,
      errorPassword: false
    });

    // Check valid email (also checks for empty string)
    if (type == "email" && !this.validateEmail(this.state.email)) {
      console.log("invalid email");
      this.setState({
        isEmail: false,
        modalVisible: true
      });
      return;
    }
    // [Incomplete] Empty string check
    switch (type) {
      case "location":
        if (this.state.longitude == 0 && this.state.latitude == 0) {
          this.setState({ errorLocation: true, modalVisible: true });
          return;
        }
        break;
      case "password":
        if (this.state.password == "") {
          this.setState({ errorPassword: true, modalVisible: true });
          return;
        }
        break;
      case "firstname":
        if (this.state.firstName === "") {
          this.setState({ errorFirstName: true, modalVisible: true });
          return;
        }
        break;
      case "lastname":
        if (this.state.lastName === "") {
          this.setState({ errorLastName: true, modalVisible: true });
          return;
        }
        break;
      default:
        break;
    }
    // Load to Main App if index is past threshold
    if (this.state.index >= 0 && this.state.index <= 8) {
      this.setState(state => {
        state.index = state.index + 1;
        return state;
      });
    }
  }
  onVerify() {
    console.log("Hitting verify");
    this.props.navigation.navigate("Loading", {
      request: "signup",
      email: this.state.email,
      password: this.state.password,
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthday: this.state.birthday,
      gender: this.state.gender
    });
  }
  onBack() {
    // console.log('before', this.state.index);
    switch (this.state.index) {
      default:
        this.setState(state => {
          state.index = state.index - 1;
          return state;
        });
        break;
    }
  }
  onChangeGender = (key, value) => {
    this.setState({ [key]: value });
    this.onContinue("");
  };
  onChangeText = (key, value) => {
    // console.log("Change in text detected");
    this.setState({
      [key]: value
    });
    return;
  };
  validateEmail = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      // this.setState({errorEmail: true});
      return false;
    } else {
      this.setState({ input: text });
      console.log("Email is Correct");
      return true;
    }
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
    this.onContinue("location");
    this.setState({ isLoading: false });
  };
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        touchSoundDisabled={true}
      >
        <Container>
          {/* Go back button, only shows past first signup screeen */}
          {this.state.index != 0 && this.state.index <= 8 && (
            <Top>
              <TouchableOpacity onPress={() => this.onBack()}>
                <TopLeftButton>
                  <Ionicons name="ios-arrow-back" size={40} color="black" />
                </TopLeftButton>
              </TouchableOpacity>
            </Top>
          )}
          {/* Header */}
          {this.state.index == 0 && (
            <Container>
              <AnimationView>
                <LottieView
                  source={dumbell}
                  autoPlay
                  style={{ width: 180, height: 180 }}
                  resizeMode="cover"
                />
              </AnimationView>
              <HeaderView>
                <HeaderText>
                  {/* <Ionicons name="ios-fitness" size={40} /> */}
                  Welcome to Fitter
                </HeaderText>
              </HeaderView>
              <SubHeaderText>
                By tapping Sign Up, you agree with our Terms of Service and
                Privacy Policy
              </SubHeaderText>
              <Button title="Sign Up" onPress={() => this.onContinue("")} />
            </Container>
          )}
          {/* Location */}
          {this.state.index == 1 && (
            <Container>
              <AnimationView>
                <LottieView
                  source={locationAnimation}
                  autoPlay
                  style={{ width: 180, height: 180 }}
                  resizeMode="cover"
                />
              </AnimationView>
              <AnimationHeaderView>
                {/* Error Message */}
                {this.state.errorLocation && (
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
                            Permission to access location was denied
                            {"\n\n"}
                            Tap to dismiss.
                          </ErrorText>
                        </ErrorView>
                      </TouchableOpacity>
                    </ErrorWrapper>
                  </ErrorContainer>
                )}
                <AnimationHeaderText>
                  {/* <Ionicons name="ios-fitness" size={40} /> */}
                  Enable Location
                </AnimationHeaderText>
                <SubHeaderText>
                  You'll need to enable your location in order to use Fitter
                </SubHeaderText>
              </AnimationHeaderView>
              <ActivityIndicator
                size="large"
                color="gold"
                animating={this.state.isLoading}
              />
              <Button title="Allow Location" onPress={this._getLocationAsync} />
            </Container>
          )}
          {/* Email */}
          {this.state.index == 2 && (
            <Container>
              {/* Error Message */}
              {!this.state.isEmail && (
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
                          Please enter a valid email address.
                          {"\n\n"}
                          Tap to dismiss.
                        </ErrorText>
                      </ErrorView>
                    </TouchableOpacity>
                  </ErrorWrapper>
                </ErrorContainer>
              )}
              <RegularView>
                <RegularText>My</RegularText>
                <RegularText>email is</RegularText>
              </RegularView>
              <Input
                placeholder="Email"
                value={this.state.email}
                type="email"
                onChangeText={this.onChangeText}
                required
              />
              <Button
                title="Continue"
                onPress={() => this.onContinue("email")}
              />
            </Container>
          )}
          {/* Password */}
          {this.state.index == 3 && (
            <Container>
              {/* Error Message */}
              {this.state.errorPassword && (
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
                          Please enter a password.
                          {"\n\n"}
                          Tap to dismiss.
                        </ErrorText>
                      </ErrorView>
                    </TouchableOpacity>
                  </ErrorWrapper>
                </ErrorContainer>
              )}
              <RegularView>
                <RegularText>My password</RegularText>
                <RegularText>will be</RegularText>
              </RegularView>
              <Input
                placeholder="Password"
                value={this.state.password}
                type="password"
                onChangeText={this.onChangeText}
                secureTextEntry
                required
              />
              <Button
                title="Continue"
                onPress={() => this.onContinue("password")}
              />
            </Container>
          )}
          {/* First Name */}
          {this.state.index == 4 && (
            <Container>
              {/* Error Message */}
              {this.state.errorFirstName && (
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
                          Please enter a first name.
                          {"\n\n"}
                          Tap to dismiss.
                        </ErrorText>
                      </ErrorView>
                    </TouchableOpacity>
                  </ErrorWrapper>
                </ErrorContainer>
              )}
              <RegularView>
                <RegularText>My first</RegularText>
                <RegularText>name is</RegularText>
              </RegularView>
              <Input
                placeholder="First Name"
                value={this.state.firstName}
                type="firstName"
                onChangeText={this.onChangeText}
                required
              />
              <Button
                title="Continue"
                onPress={() => this.onContinue("firstname")}
              />
            </Container>
          )}
          {/* Last Name */}
          {this.state.index == 5 && (
            <Container>
              {/* Error Message */}
              {this.state.errorLastName && (
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
                          Please enter a last name.
                          {"\n\n"}
                          Tap to dismiss.
                        </ErrorText>
                      </ErrorView>
                    </TouchableOpacity>
                  </ErrorWrapper>
                </ErrorContainer>
              )}
              <RegularView>
                <RegularText>My last</RegularText>
                <RegularText>name is</RegularText>
              </RegularView>
              <Input
                placeholder="Last Name"
                value={this.state.lastName}
                type="lastName"
                onChangeText={this.onChangeText}
                required
              />
              <Button
                title="Continue"
                onPress={() => this.onContinue("lastname")}
              />
            </Container>
          )}
          {/* Birthday */}
          {this.state.index == 6 && (
            <Container>
              <RegularView>
                <RegularText>My</RegularText>
                <RegularText>birthday is</RegularText>
              </RegularView>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.birthday}
                mode="date"
                placeholder="Select Birthday"
                format="YYYY-MM-DD"
                minDate="1930-01-01"
                maxDate="2001-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 50,
                    color: "white"
                  },
                  dateText: {
                    color: "white"
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.onChangeText("birthday", date);
                  // console.log('Change in date. Assigning to input state...');
                  this.onContinue("birthday");
                }}
              />
            </Container>
          )}
          {/* Gender */}
          {this.state.index == 7 && (
            <Container>
              <RegularView>
                <RegularText>I am a</RegularText>
              </RegularView>
              <Button
                title="Male"
                onPress={async () => this.onChangeGender("gender", "male")}
              />
              <Button
                title="Female"
                onPress={() => this.onChangeGender("gender", "female")}
              />
              <Button
                title="Neither"
                onPress={() => this.onChangeGender("gender", "neither")}
              />
            </Container>
          )}
          {/* Gender */}
          {this.state.index == 8 && (
            <Container>
              <SummaryView>
                <SummaryMainHeader>Confirm details</SummaryMainHeader>
                <SummaryHeader>Email</SummaryHeader>
                <SummaryText>{this.state.email}</SummaryText>
                <SummaryHeader>Password</SummaryHeader>
                <SummaryText>{this.state.password}</SummaryText>
                <SummaryHeader>First name</SummaryHeader>
                <SummaryText>{this.state.firstName}</SummaryText>
                <SummaryHeader>Last name</SummaryHeader>
                <SummaryText>{this.state.lastName}</SummaryText>
                <SummaryHeader>Birthday</SummaryHeader>
                <SummaryText>{this.state.birthday}</SummaryText>
                <SummaryHeader>Gender</SummaryHeader>
                <SummaryText>{this.state.gender}</SummaryText>

                <TouchableOpacity
                  onPress={this.onVerify}
                  style={{ marginTop: 10 }}
                >
                  <ButtonContainer>
                    <ButtonText>Confirm</ButtonText>
                  </ButtonContainer>
                </TouchableOpacity>
              </SummaryView>
            </Container>
          )}
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

// export default Signup;
