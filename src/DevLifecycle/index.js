import React from "react";
import { Slide, FlexBox, Notes } from "spectacle";
import DevelopmentLifecycle from "./DevelopmentLifecycle2";

const Slide6 = () => (
  <Slide padding="5rem" backgroundColor="quinary">
    <FlexBox height="100%" flexDirection="column">
      <DevelopmentLifecycle />
    </FlexBox>
    <Notes>
      I had a picture of an ideal development process in my mind. It included
      something about web-performance on every step of this lifecycle:
      requirement analysis, planning, design, development and testing,
      deployment and monitoring. For example, I imagined web performance goals
      to be set and be part of every feature requirement. When estimating the
      time and complexity of the task we would take into account web performance
      as well. Also, when we start a new project we would think about which FE
      architecture to choose so it would be the most performant. During the
      release we would collect performance reports. We would constantly inform
      our stakeholders about web performance on the sprint reviews. We would
      create performance dashboards and set alerts, so we know when the website
      becomes too slow. So many things could be done! Imagine how hard it is to
      integrate into the process. Especially if you are the only one who drives
      the initiative. It’s hard but not impossible.
    </Notes>
  </Slide>
);

export default Slide6;
