import React from "react";
import { Slide, FlexBox, Heading, Notes } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px">
        <span style={{ color: colors.green }}>#2</span> Speak about performance
        as much as possible
      </Heading>
    </FlexBox>
    <Notes>
      Speak about web-perf as much as possible. Make sure everyone heard about
      the issue at least once. Raise awareness about this topic across the
      company. Present the topic multiple times.
    </Notes>
  </Slide>
);

export default Slide1;
