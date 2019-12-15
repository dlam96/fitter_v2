import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { RootStack } from "./src/routes";
// TODO: Provider for redux
let Navigation = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return <Navigation />;
  }
}
