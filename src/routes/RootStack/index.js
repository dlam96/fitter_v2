import { createStackNavigator } from "react-navigation-stack";
import AppIntroTab from "../AppIntro";
import Auth from "../Auth";

const RootStack = createStackNavigator(
  { AppIntroTab, Auth },
  { headerMode: "none" }
);
export default RootStack;
