import React, { Component } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class Messages extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
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
          user={{
            _id: 1
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}
