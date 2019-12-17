import React, { Component } from "react";
import { KeyboardAvoidingView, View } from "react-native";

// Redux
import { connect } from "react-redux";
import { login, logout, signup, setPref, resetPref } from "../../redux/actions";
import { bindActionCreators } from "redux";

import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";

class Messages extends Component {
  state = {
    messages: []
  };
  constructor(props) {
    super(props);
    // console.log("Socket: " + this.props.socket);
  }
  componentDidMount() {
    console.log("In messages compDidMount");
    const socket = this.props.socket;
    // socket.on("connect", () => {
    //   console.log("Connect to socket in App ");
    //   // socket.emit("chat_message", "this is from client side");
    // });

    socket.emit("connection", {
      id: ""
    });

    socket.on("connect_error", error => {
      console.log("Connection prob in connections (Messages): " + error);
    });
    socket.on("connect_timeout", timeout => {
      console.log("Timeout in connections (Messages): " + timeout);
    });
    socket.on("error", error => {
      console.log("Error in connections (Messages): " + error);
    });
    socket.emit("chat_message", { message: "test" });

    console.log("after emit messages compDidMount");
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    console.log("Message " + JSON.stringify(messages));
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ width: "100%", height: "100%" }}
        keyboardVerticalOffset={60}
      >
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          messageIdGenerator={() => 2}
          user={{
            _id: 1
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => {
  console.log(
    "Messages redux: ",
    state.logged.userID + " token: " + state.logged.token
  );
  console.log("hostname mapping redux " + state.hostname.hostName);
  return {
    // email: state.logged.email,
    socket: state.socket.socket,
    userID: state.logged.userID,
    hostName: state.hostname.hostName
  };
};
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       login,
//       logout,
//       signup,
//       setPref,
//       resetPref
//     },
//     dispatch
//   );
// };
export default connect(
  // Get from store. map state to props function,
  mapStateToProps
)(Messages);
