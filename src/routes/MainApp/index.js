import React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Profile from "../../screens/Profile";

import { Ionicons } from "@expo/vector-icons";

const MainApp = createMaterialBottomTabNavigator(
  {
    // Loading: LoadingScreen,
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{ fontWeight: "bold", fontSize: 10, marginVertical: 10 }}
          >
            Profile
          </Text>
        ),
        tabBarColor: "gold",
        tabBarIcon: (
          <Ionicons
            name="ios-person"
            size={30}
            style={{ fontWeight: "bold" }}
          />
        )
      }
    },
    Second: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{ fontWeight: "bold", fontSize: 10, marginVertical: 10 }}
          >
            Profile
          </Text>
        ),
        tabBarColor: "gold",
        tabBarIcon: (
          <Ionicons
            name="ios-person"
            size={30}
            style={{ fontWeight: "bold" }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Profile",
    shifting: true,
    activeColor: "black"
  }
);

export default MainApp;
