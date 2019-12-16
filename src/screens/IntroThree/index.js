import React from "react";

import { Intro } from "../../components";

const animation = require("../../animations/safety.json");

const IntroThree = () => (
  <Intro
    animation={animation}
    title="Safety Tips"
    body="Meeting new people is exciting, but you should always be cautious when interacting with someone you don’t know. Use your best judgment and put your safety first, whether you are exchanging initial messages or meeting in person."
  />
);
export default IntroThree;
