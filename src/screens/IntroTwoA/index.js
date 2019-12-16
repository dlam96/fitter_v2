import React from "react";

import { Intro } from "../../components";

const animation = require("../../animations/permission.json");

const IntroTwoA = () => (
  <Intro
    animation={animation}
    title="Privacy policy"
    body="Insufficient information and overly complicated language are common issues in privacy policies. We take the exact opposite approach by writting our Privacy Policy in plain language. We actually want you to read our policies and understand our privacy practices!"
  />
);
export default IntroTwoA;
