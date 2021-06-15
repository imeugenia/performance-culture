import React from "react";
import { colors } from "../constants";
import { Slide, FlexBox, Heading, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px">
        <span style={{ color: colors.green }}>#5</span> Use proactive approach.
        Change development process.
      </Heading>
    </FlexBox>
    <Notes>
      Use proactive approach. Don't just fix current performance issues. Change
      development process so you have good performance in a long term.
    </Notes>
  </Slide>
);

export default Slide1;
