import React from "react";
import { Slide, FlexBox, Heading, Notes } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px">
        <span style={{ color: colors.green }}>#1</span> Be equipped with data
      </Heading>
    </FlexBox>
    <Notes>
      Be equipped with data. You need to a proof that real user experience
      suffers from the slow page.
    </Notes>
  </Slide>
);

export default Slide1;
