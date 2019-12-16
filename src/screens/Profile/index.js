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
  TopRightButton,
  Container,
  ProfilePicture,
  NameView,
  NameInput,
  AgeText,
  Wrapper,
  DescriptionView,
  DescriptionInput
} from "./styledComponents";
import { Ionicons } from "@expo/vector-icons";

// Redux
import { connect } from "react-redux";
import { logout, setPref, resetPref } from "../../redux/actions";
import { bindActionCreators } from "redux";
const axios = require("axios");

// TODO set up change for name and description
class Profile extends Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      age: this.props.age,
      description: this.props.description,
      showMen: this.props.showMen,
      showWomen: this.props.showWomen,
      showUser: this.props.showUser,
      distance: this.props.distance,
      upperAgeRange: this.props.upperAgeRange,
      lowerAgeRange: this.props.lowerAgeRange
    };
    console.log("in profile constructor");
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
  onChangeFirstName = async () => {
    await axios
      .patch(
        this.props.hostName + "/user",
        {
          firstName: this.state.firstName
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update firstName ", error.message);
      });
  };
  onChangeFirstNameState = value => {
    this.setState({ firstName: value });
    // console.log(
    //   'Setting firstName ' + value + 'state now ' + this.state.firstName,
    // );
  };
  onChangeLastName = async () => {
    await axios
      .patch(
        this.props.hostName + "/user",
        {
          lastName: this.state.lastName
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update lastName ", error.message);
      });
  };
  onChangeLastNameState = value => {
    this.setState({ lastName: value });
    // console.log(
    //   'Setting lastName ' + value + 'state now ' + this.state.lastName,
    // );
  };
  onChangeDescription = async () => {
    await axios
      .patch(
        this.props.hostName + "/user",
        {
          description: this.state.description
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update description ", error.message);
      });
  };
  onChangeDescriptionState = value => {
    this.setState({ description: value });
  };

  toggleMen = async value => {
    await this.setState({ showMen: value });
    console.log(
      "Setting men bool " + value + "state now " + this.state.showMen
    );
    await axios
      .patch(
        this.props.hostName + "/preferences",
        {
          showMen: this.state.showMen
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update men ", error.message);
      });
  };
  toggleWomen = async value => {
    await this.setState({ showWomen: value });
    console.log(
      "Setting women bool " + value + "state now " + this.state.showWomen
    );
    await axios
      .patch(
        this.props.hostName + "/preferences",
        {
          showWomen: this.state.showWomen
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update women ", error.message);
      });
  };
  toggleShow = async value => {
    console.log("user bool", value);
    await this.setState({ showUser: value });
    await axios
      .patch(
        this.props.hostName + "/preferences",
        {
          showUser: this.state.showUser
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update hidden ", error.message);
      });
  };
  goToTop = () => {
    setTimeout(() => {
      this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }, 250);
  };
  goToSettings = () => {
    setTimeout(() => {
      this.scroll.scrollTo({ x: width, y: height - 100, animated: true });
    }, 250);
  };
  // convert int to string
  changeLowerAge = async value => {
    if (value != null && value != "") {
      // if age is over 2 digits reset back
      console.log("Setting lower age to ", value);
      await this.setState({ lowerAgeRange: value });
    } else {
      this.setState({ lowerAgeRange: "" });
    }
    if (value.length <= 1) {
      return;
    }
    await axios
      .patch(
        this.props.hostName + "/preferences",
        {
          lowerAgeRange: this.state.lowerAgeRange
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update lowerAge ", error.message);
      });
  };
  changeUpperAge = async value => {
    if (value != null && value != "") {
      // if age is over 2 digits reset back
      console.log("Setting upper age to ", value);
      await this.setState({ upperAgeRange: value });
    } else {
      this.setState({ upperAgeRange: "" });
    }
    if (value.length <= 1) {
      return;
    }
    await axios
      .patch(
        this.props.hostName + "/preferences",
        {
          upperAgeRange: this.state.upperAgeRange
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update upperAge ", error.message);
      });
  };
  changeDistance = async value => {
    await this.setState({ distance: value });
    console.log("Set state to " + value + " new state " + this.state.distance);
    await axios
      .patch(
        this.props.hostName + "/preferences",
        {
          distance: this.state.distance
        },
        { headers: { Authorization: this.props.token } }
      )
      .catch(error => {
        console.log("failed to update distance ", error.message);
      });
  };
  // TODO: end session
  onLogOut = async () => {
    console.log("Logging Out");
    this.props.navigation.navigate("Loading", { request: "signout" });
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
              <TouchableOpacity onPress={this.onLogOut}>
                <TopRightButton>
                  <Ionicons name="ios-log-out" size={40} color="black" />
                </TopRightButton>
              </TouchableOpacity>
            </Top>
          </ProfilePicture>
          <Wrapper>
            <NameView>
              <NameInput
                value={this.state.firstName}
                placeholder={this.state.firstName}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                placeholderTextColor="gold"
                onChangeText={text => this.onChangeFirstNameState(text)}
                onSubmitEditing={event => {
                  this.onChangeFirstName(event.nativeEvent.text);
                }}
              />
              <NameInput
                value={this.state.lastName}
                placeholder={this.state.lastName}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                placeholderTextColor="gold"
                onChangeText={text => this.onChangeLastNameState(text)}
                onSubmitEditing={event => {
                  this.onChangeLastName(event.nativeEvent.text);
                }}
              />
              <AgeText>{this.state.age}</AgeText>
            </NameView>
            <DescriptionView>
              <DescriptionInput
                value={this.state.description}
                placeholder={this.state.description}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={text => this.onChangeDescriptionState(text)}
                onEndEditing={event => {
                  this.onChangeDescription(event.nativeEvent.text);
                }}
              />
            </DescriptionView>
          </Wrapper>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  console.log("Redux State", state);
  // console.log('distance ' + state.preferences.distance);
  return {
    hostName: state.hostname.hostName,
    token: state.logged.token,
    firstName: state.logged.firstName,
    lastName: state.logged.lastName,
    age: state.logged.age,
    description: state.logged.description,
    showMen: state.preferences.showMen,
    showWomen: state.preferences.showWomen,
    showUser: state.preferences.showUser,
    distance: state.preferences.distance,
    upperAgeRange: state.preferences.upperAgeRange,
    lowerAgeRange: state.preferences.lowerAgeRange
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       logout,
//       setPref,
//       resetPref
//     },
//     dispatch
//   );
// };

export default connect(mapStateToProps)(Profile);
// export default Profile;
