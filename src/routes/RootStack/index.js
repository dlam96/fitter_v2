import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import AppIntroTab from "../AppIntro";
import AuthNavigator from "../Auth";
import AppNavigator from "../MainApp";
import LoadingScreen from "../../screens/LoadingScreen";

const SwitchNav = createSwitchNavigator(
  {
    MainApp: AppNavigator,
    Auth: AuthNavigator,
    Loading: LoadingScreen
  },
  {
    // Change route name to debug tab navs
    initialRouteName: "Auth"
  }
);
const RootStack = createStackNavigator(
  { AppIntroTab, SwitchNav },
  { headerMode: "none" }
);
export default RootStack;
