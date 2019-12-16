import React from "react";

import { Intro } from "../../components";

const animation = require("../../animations/permission.json");

const IntroTwo = () => (
  <Intro
    animation={animation}
    title="Privacy policy"
    body="At Fitter, your privacy is a top priority. Your privacy is at the core of the way we design and build the services and products you know and love, so that you can fully trust them and focus on building meaningful connections. We strive to be transparent in the way we process your data."
  />
);
export default IntroTwo;
