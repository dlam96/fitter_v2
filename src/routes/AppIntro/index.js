import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import {
  IntroOne,
  IntroOneA,
  IntroTwo,
  IntroTwoA,
  IntroThree,
  IntroThreeA
} from "../../screens";
import { options } from "./options";

const AppIntroTab = createMaterialTopTabNavigator(
  { IntroOne, IntroOneA, IntroTwo, IntroTwoA, IntroThree, IntroThreeA },
  options
);

export default AppIntroTab;
