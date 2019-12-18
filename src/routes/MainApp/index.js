import React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Profile from "../../screens/Profile";
import Messages from "../../screens/Messages";
import Home from "../../screens/Home";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
let TabIsBlack = true;
function ChangeTabColor(black) {
  TabIsBlack = black;
}

const MainApp = createMaterialBottomTabNavigator(
  {
    // Loading: LoadingScreen,

    // Messages: {
    //   screen: Messages,
    //   navigationOptions: {
    //     tabBarLabel: (
    //       <Text
    //         style={{ fontWeight: "bold", fontSize: 10, marginVertical: 10 }}
    //       >
    //         Messages
    //       </Text>
    //     ),
    //     tabBarColor: "gold",
    //     tabBarIcon: ({ focused, tintColor }) => (
    //       // focused ? ChangeTabColor(false) : ChangeTabColor(true),
    //       <MaterialIcons
    //         name="chat"
    //         size={30}
    //         color={tintColor}
    //         style={{ fontWeight: "bold" }}
    //       />
    //     )
    //   }
    // },

    Find: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{
              color: "gold",
              fontWeight: "bold",
              fontSize: 10,
              marginVertical: 10
            }}
          >
            Find
          </Text>
        ),
        tabBarColor: "black",
        tabBarIcon: ({ focused, tintColor }) => (
          ChangeTabColor(true),
          (
            <Ionicons
              name="ios-fitness"
              size={35}
              color={tintColor}
              style={{
                fontWeight: "bold",
                width: 35,
                height: 35,
                paddingLeft: 2
                // marginVertical: 3
                // backgroundColor: "white"
              }}
            />
          )
        )
      }
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{ fontWeight: "bold", fontSize: 10, marginVertical: 10 }}
          >
            Messages
          </Text>
        ),
        tabBarColor: "black",
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialIcons
            name="chat"
            size={30}
            color={tintColor}
            style={{
              fontWeight: "bold",
              width: 35,
              height: 35,
              paddingLeft: 2
            }}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 10,
              marginVertical: 10
            }}
          >
            Profile
          </Text>
        ),
        tabBarColor: "gold",
        tabBarIcon: ({ focused, tintColor }) => (
          ChangeTabColor(false),
          (
            <Ionicons
              name="ios-person"
              size={30}
              color={focused ? "black" : tintColor}
              style={{ fontWeight: "bold" }}
            />
          )
        )
      }
    }
  },
  {
    initialRouteName: "Find",
    shifting: true,
    activeColor: "gold",
    inactiveColor: "grey"
  }
);

export default MainApp;
