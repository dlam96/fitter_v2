import React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Signin from "../../screens/Signin";
import Signup from "../../screens/Signup";
import { Ionicons } from "@expo/vector-icons";

const Auth = createMaterialBottomTabNavigator(
  {
    // Loading: LoadingScreen,
    SignIn: {
      screen: Signin,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{ fontWeight: "bold", fontSize: 10, marginVertical: 10 }}
          >
            Sign In
          </Text>
        ),
        tabBarColor: "gold",
        tabBarIcon: (
          <Ionicons
            name="ios-log-in"
            size={30}
            style={{ fontWeight: "bold" }}
          />
        )
      }
    },
    SignUp: {
      screen: Signup,
      navigationOptions: {
        tabBarLabel: (
          <Text
            style={{ fontWeight: "bold", fontSize: 10, marginVertical: 10 }}
          >
            Sign Up
          </Text>
        ),
        tabBarColor: "gold",
        tabBarIcon: () => (
          <Ionicons
            name="ios-person-add"
            size={30}
            style={{ fontWeight: "bold" }}
          />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          // console.log(
          //   "onPress in Auth route index.js:",
          //   navigation.state.routeName
          // );
          // Re-render screen on tab press,
          navigation.navigate("SignUp", { date: new Date() });
          defaultHandler();
        }
      }
    }
    // App: AppNavigator
  },
  {
    initialRouteName: "SignIn",
    shifting: true,
    activeColor: "black"
  }
);

export default Auth;
