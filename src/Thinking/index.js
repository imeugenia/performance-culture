import React from "react";
import { Slide, FlexBox, Notes } from "spectacle";

const Slide3 = () => (
  <Slide padding="5rem" backgroundColor="quinary">
    <FlexBox height="100%" flexDirection="column">
      <iframe
        src="https://giphy.com/embed/xUOrvZ4p5o3QlIumZO"
        width="150"
        height="150"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </FlexBox>
    <Notes>
      How could we approach the problem? In general, when you think about a
      problem, it could be approached in 2 different ways: reactive and
      proactive.{" "}
    </Notes>
  </Slide>
);

export default Slide3;
