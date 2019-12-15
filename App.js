import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { RootStack } from "./src/routes";
// TODO: Provider for redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers/index";
const store = createStore(rootReducer);

let Navigation = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
