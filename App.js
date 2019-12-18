import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { RootStack } from "./src/routes";
// TODO: Provider for redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers/index";
const store = createStore(rootReducer);
// Redux
import { storeSocket } from "./src/redux/actions";
import io from "socket.io-client";

let Navigation = createAppContainer(RootStack);
class App extends Component {
  componentDidMount() {
    let socket = io("http://www.fitter.best:4200", {
      transport: ["websocket"]
    });

    socket.on("connect", () => {
      console.log("Connect to socket in App ");
    });
    socket.on("connect_error", error => {
      console.log("Connect error in connections (App): " + error);
    });
    socket.on("connect_timeout", timeout => {
      console.log("Timeout in connections (App): " + timeout);
    });
    socket.on("error", error => {
      console.log("Error in connections (App): " + error);
    });

    store.dispatch(storeSocket(socket));

    // console.log("app mounted");
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
