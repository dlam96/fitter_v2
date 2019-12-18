import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  CardsContainer,
  MatchedModal,
  MatchedHeading,
  MatchedWrapper,
  MatchedTitle,
  IconContainer,
  ButtonText
} from "./styledComponents";
import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "../../components/CardItem";
import Button from "../../components/Button";
import Demo from "../../../assets/sampledata";
// Redux
import { connect } from "react-redux";
// import {
//   login,
//   logout,
//   signup,
//   setPref,
//   resetPref,
//   storeCards
// } from "../../redux/actions";
// import { bindActionCreators } from "redux";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      matchedName: "",
      possibles: this.props.possibles,
      arrayLen: this.props.possibles.length - 1,
      noMoreCards: false
    };

    this.setModalVisible = this.setModalVisible.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);

    // this.onModalUp = this.onModalUp.bind(this);
    console.log("In home constructor");
  }
  componentDidMount = async () => {
    // Get a set of cards when screen loads
    console.log("In home didMount");
    const len = this.props.possibles.length - 1;
    if (this.props.possibles && len <= 0) {
      await this.props.navigation.navigate("Loading", {
        request: "loadcards"
      });
    }

    console.log("Length of demo array: " + len);

    // console.log("Set states are: " + JSON.stringify(this.state.possibles));
  };
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  onSwipeLeft = () => {
    this.setState({ arrayLen: this.state.arrayLen - 1 });
    console.log("Left swipe: arrayLen " + this.state.arrayLen);
    if (this.state.arrayLen <= 0) {
      this.props.navigation.navigate("Loading", {
        request: "loadcards"
      });
    }
  };
  onSwipeRight = async (_id, name) => {
    // console.log('Swipepd on ' + id + ' name ' + name);
    if (this.state.arrayLen <= 0) {
      this.props.navigation.navigate("Loading", {
        request: "loadcards"
      });
    }
    this.setState({
      arrayLen: this.state.arrayLen - 1
    });
    // const axios = require('axios');
    console.log("Initiating onSwipeRight in Home.js\n");
    console.log("received " + _id + " and " + name + " on swipeRight");
    this.setState({ matchedName: name });
    this.setModalVisible(!this.state.modalVisible);
    // await axios
    //   .post(
    //     this.props.hostName + '/possibleMatch',
    //     {
    //       id: _id,
    //     },
    //     {headers: {Authorization: this.props.token}},
    //   )
    //   .then(response => {
    //     console.log('Matching ' + response.data.matched);
    //     this.setState({
    //       modalVisible: response.data.matched,
    //       matchedName: name,
    //       modalVisible: true,
    //     });
    //   })
    //   .catch(error => {
    //     console.log(JSON.stringify(error));
    //   });
  };

  render() {
    return (
      <CardsContainer>
        {/* Modal */}
        <MatchedModal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <MatchedWrapper>
            <MatchedTitle>It's a Match!</MatchedTitle>
            <MatchedHeading>
              {"\n"}You and{" "}
              <MatchedHeading inputColor="white">
                {this.state.matchedName}
              </MatchedHeading>
              {"\n"}
              want to be Fitter buddies!
            </MatchedHeading>
            {/* Custom Button */}
            <TouchableOpacity
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <IconContainer>
                <ButtonText>Dismiss</ButtonText>
              </IconContainer>
            </TouchableOpacity>
          </MatchedWrapper>
        </MatchedModal>
        {/* Cards */}
        <CardStack
          // loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => {
            // this.props.navigation.navigate('App');
            null;
          }}
          ref={swiper => {
            this.swiper = swiper;
          }}
          // onSwipedRight={id => )}
          onSwipedLeft={id => console.log("onSwipedLeft")}
        >
          {/* Map each user to a component card */}
          {this.state.possibles.map((item, index) => (
            <Card
              key={index}
              onSwipedRight={() => this.onSwipeRight(item.id, item.name)}
              onSwipedLeft={() => this.onSwipeLeft()}
            >
              {/* THIS IS A CUSTOM COMPONENT */}
              <CardItem
                image={
                  index % 2 == 0
                    ? require("../../../assets/headshots/flanders.png")
                    : require("../../../assets/headshots/marge_hot.jpg")
                }
                id={item.id}
                name={item.name}
                matches={item.match}
                description={item.description}
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </CardsContainer>
    );
  }
}
const mapStateToProps = state => {
  console.log("Home redux: ", state.find.possibles);
  return {
    possibles: state.find.possibles
  };
};
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       login,
//       logout,
//       signup,
//       setPref,
//       resetPref,
//       storeCards
//     },
//     dispatch
//   );
// };
export default connect(mapStateToProps)(Home);
