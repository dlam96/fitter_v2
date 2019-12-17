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
      id: "5df82e0fa67dc31d3d6253ba"
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

    console.log("after emit messages compDidMount");
    //   this.setState({
    //     messages: [
    //       {
    //         _id: 1,
    //         text: "Hello developer",
    //         createdAt: new Date(),
    //         user: {
    //           _id: 2,
    //           name: "React Native",
    //           avatar: "https://placeimg.com/140/140/any"
    //         }
    //       }
    //     ]
    //   });
    socket.on("chat_message", messages => {
      console.log("received a message from server " + messages);
    });
  }

  onSend(messages = []) {
    console.log("Message " + JSON.stringify(messages));
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    console.log("Message first line" + messages[0].text + "\n\n ");
    const socket = this.props.socket;

    // socket.emit(
    //   "chat_message",
    //   JSON.stringify({
    //     sendUser: "5df82e0fa67dc31d3d6253ba",
    //     receiveUser: "5df82e0fa67dc31d3d6253b9",
    //     token:
    //       "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJAYi5jb20iLCJpYXQiOjE1NzY1NDYwNzMsImV4cCI6MTU3OTEzODA3MywiYXVkIjoiaHR0cDovL0ZpdHRlci5jb20iLCJpc3MiOiJGaXR0ZXIgQ29ycCIsInN1YiI6Ik1haW4gQXV0aCJ9.RFgPPHVnBLlKo1XH-2UnPROZooZVr-n1V7ykrmj0F1Lxo_XSZu-icc7bmQEK70W99-5KO0_MxRtEINs-cl6vvwyXOM-I_VsjdkAzzvVKl8YCaDA2iRGVKlvvjpJ4jKLXS32j04GPeWEYjGtRLe6kj0EPmvfzSuXRcL9FjE6v1dw",
    //     message: messages[0].text
    //   })
    // );
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
          // messageIdGenerator={() => "5df82e0fa67dc31d3d6253b9"}
          scrollToBottom
          user={{
            _id: "5df82e0fa67dc31d3d6253ba"
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
