import React from "react";
import { Slide, FlexBox, Heading, Notes } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px">
        <span style={{ color: colors.green }}>#3</span> Propose improvements
      </Heading>
    </FlexBox>
    <Notes>
      If you are the first one who speaks about it. You need drive the
      initiative further and be the first one who propose a solution. Later
      other people will join your forces.
    </Notes>
  </Slide>
);

export default Slide1;
