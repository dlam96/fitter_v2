import React from "react";

import { Intro } from "../../components";

const animation = require("../../animations/awareness.json");

const IntroOneA = () => (
  <Intro
    animation={animation}
    title="What is Fitter?"
    body="Just tap through the profiles you’re interested in, chat online with your matches, then step away from your phone, meet up in the real world and spark something new."
  />
);
export default IntroOneA;
