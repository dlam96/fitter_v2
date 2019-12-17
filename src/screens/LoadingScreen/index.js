import React, { Component } from "react";
import { Text } from "react-native";
import {
  Container,
  AnimationView,
  HeaderView,
  SubHeaderText
} from "./styledComponents";
// Quotes
const textLibrary = [
  "Cleaning the gym equipment...",
  "Today is the day.",
  "Hey, beautiful.",
  "Rome wasn’t built in a day, but \nthey worked on it every single day.",
  "Work hard in silence\nLet your success\nBe your noise.",
  "Left Foot, Right Foot ...",
  "Lets Get it!",
  "The best way to predict the future is to create it.\n- Abraham Lincoln"
];
// Animations
import LottieView from "lottie-react-native";
const treadmill = require("../../animations/dumbell_alt.json");

// TODO:
// Setup Redux
// Redux
import { connect } from "react-redux";
import { login, logout, signup, setPref, resetPref } from "../../redux/actions";
import { bindActionCreators } from "redux";
// Setup Axios
class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToDisplay: ""
    };

    this.onSignOut = this.onSignOut.bind(this);
    this.onLogin = this.onLogin.bind(this);
    // onResponse for Login
    this.onResponse = this.onResponse.bind(this);
    this.sendBack = this.sendBack.bind(this);
    this.onSignup = this.onSignup.bind(this);
    // onVerify for Signup
    this.onVerify = this.onVerify.bind(this);

    // Get param from last screen that called Loading.
    // Make API call and respond as neccessary
    let req = this.props.navigation.getParam("request", "");
    if (req == "signup") {
      console.log("Came from signup screen");
      console.log(
        "Email: " +
          this.props.navigation.getParam("email", "") +
          " password: " +
          this.props.navigation.getParam("password", "") +
          " longitude: " +
          this.props.navigation.getParam("longitude", 0) +
          " latitude: " +
          this.props.navigation.getParam("latitude", 0) +
          " first: " +
          this.props.navigation.getParam("firstName", "") +
          " last: " +
          this.props.navigation.getParam("lastName", "") +
          " birthday: " +
          this.props.navigation.getParam("birthday", "") +
          " gender: " +
          this.props.navigation.getParam("gender", "")
      );
      this.onSignup();
    } else if (req == "signin") {
      console.log("Came from signin screen");
      console.log(
        "Email: " +
          this.props.navigation.getParam("email", "") +
          " password: " +
          this.props.navigation.getParam("password", "") +
          " longitude: " +
          this.props.navigation.getParam("longitude", 0) +
          " latitude: " +
          this.props.navigation.getParam("latitude", 0)
      );
      this.onLogin();
    } else if (req == "signout") {
      console.log("Came from profile screen");
      this.onSignOut();
    }
  }
  componentDidMount() {
    let NUM_OF_QUOTES = 8;
    const index = Math.floor(Math.random() * NUM_OF_QUOTES);
    this.setState({
      textToDisplay: textLibrary[index]
    });
  }
  onSignOut = async () => {
    console.log("SIGNOUT IN LOADING SCREEN CALLED");
    this.props.logout();
    this.props.resetPref();
    this.sendBack("SignIn");
  };
  // Helper function to navigate to other screens
  sendBack = path => {
    setTimeout(() => {
      this.props.navigation.navigate(path);
    }, 2000);
  };
  onLogin = async () => {
    const axios = require("axios");
    console.log("Initiating onLogin\n");
    // console.log("TOKEN: "+this.props.navigation.getParam)
    await axios
      .post(
        this.props.hostName + "/login",
        {
          email: this.props.navigation.getParam("email", ""),
          password: this.props.navigation.getParam("password", ""),
          longitude: this.props.navigation.getParam("longitude", 0),
          latitude: this.props.navigation.getParam("latitude", 0)
        },
        { headers: { Authorization: this.props.token } }
      )
      .then(this.onResponse)
      .catch(error => {
        // if fail credentials, reject user and flash error message
        console.log("Error @ onLogin in Loading Screen. " + error);
      });
    // if fail credentials, reject user and flash error message
    this.sendBack("SignIn");
    return;
  };
  // componentDidCatch(error) {
  //   console.log("Error signing in @ ComponentDidiCatch " + error);
  //   this.sendBack("SignIn");
  // }
  // If login successful, update the redux states for main App to use.
  onResponse = async response => {
    console.log("Response " + response.data);
    console.log("Pref distance " + response.data.preferences.distance);
    console.log("Age from API: ", response.data.age);
    console.log("\n");
    this.setState({
      userEmail: this.props.navigation.getParam("email", "")
    });
    this.props.login(
      response.data.id,
      response.data.token,
      this.state.userEmail,
      response.data.firstName,
      response.data.lastName,
      response.data.age,
      response.data.description
    );
    this.props.setPref(
      response.data.preferences.showMen,
      response.data.preferences.showWomen,
      response.data.preferences.showUser,
      response.data.preferences.distance,
      response.data.preferences.upperAgeRange,
      response.data.preferences.lowerAgeRange
    );
    // Direct to main app on success login
    this.sendBack("MainApp");
    return;
  };

  onSignup = async () => {
    const axios = require("axios");
    axios
      .post(this.props.hostName + "/signup", {
        email: this.props.navigation.getParam("email", ""),
        password: this.props.navigation.getParam("password", ""),
        longitude: this.props.navigation.getParam("longitude", 0),
        latitude: this.props.navigation.getParam("latitude", 0),
        firstName: this.props.navigation.getParam("firstName", ""),
        lastName: this.props.navigation.getParam("lastName", ""),
        birthday: this.props.navigation.getParam("birthday", ""),
        gender: this.props.navigation.getParam("gender", "")
      })
      .then(this.onVerify)
      .catch(function(error) {
        // console.log(JSON.stringify(error.response));
        // console.log(error.response);
        console.log("data ", error);
      });
  };
  // if signup successful, update redux and navigate to app
  onVerify = async () => {
    this.props.signup();

    // To change to app route
    this.sendBack("MainApp");
  };

  render() {
    return (
      <Container>
        <AnimationView>
          <LottieView
            source={treadmill}
            autoPlay
            style={{ width: 360, height: 360 }}
            resizeMode="cover"
          />
        </AnimationView>
        <HeaderView>
          <SubHeaderText>{this.state.textToDisplay}</SubHeaderText>
        </HeaderView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log("LoadingScrn redux: ", state);
  return {
    // email: state.logged.email,
    hostName: state.hostname.hostName
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login,
      logout,
      signup,
      setPref,
      resetPref
    },
    dispatch
  );
};
export default connect(
  // Get from store. map state to props function,
  mapStateToProps,
  // Send/dispatch to store { actions, ... }
  mapDispatchToProps
)(LoadingScreen);
// export default LoadingScreen;
