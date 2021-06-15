import React from "react";
import { colors } from "../constants";
import { Slide, FlexBox, Heading, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px">
        <span style={{ color: colors.green }}>#4</span> Get support from the
        main stakeholders
      </Heading>
    </FlexBox>
    <Notes>
      Get support from the main stakeholders. They are people who are able to
      provide you with necessary resources to solve the problem.
    </Notes>
  </Slide>
);

export default Slide1;
