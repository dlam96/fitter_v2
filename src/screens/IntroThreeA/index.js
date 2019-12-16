import React from "react";

import { Intro } from "../../components";

const animation = require("../../animations/safety.json");

const IntroThreeA = () => (
  <Intro
    animation={animation}
    title="Safety Tips"
    body="While you can’t control the actions of others, there are things you can do to help you stay safe during your Fitter experience. To view our safety tips, please visit our website at www.fitter.best"
  />
);
export default IntroThreeA;
