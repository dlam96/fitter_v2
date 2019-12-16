import React from "react";

import { Intro } from "../../components";

const animation = require("../../animations/awareness.json");

const IntroOne = () => (
  <Intro
    animation={animation}
    title="What is Fitter?"
    body="Match. Chat. Workout. Fitter is easy and fun—use the Swipe Right™ feature to Like someone, 
    use the Swipe Left™ feature to pass. If someone likes you back, It’s a Match! No stress. No rejection."
  />
);
export default IntroOne;
