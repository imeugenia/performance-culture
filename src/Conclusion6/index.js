import React from "react";
import { colors } from "../constants";
import { Slide, FlexBox, Heading, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px">
        <span style={{ color: colors.green }}>#6</span> Invite your teammates to
        collaborate
      </Heading>
    </FlexBox>
    <Notes>
      Invite your teammates to collaborate. Because you can build a culture only
      if you work together, only if web performance is truly a shared goal.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
