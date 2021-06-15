import React from "react";
import { Slide, FlexBox, Heading, Notes } from "spectacle";
import { colors } from "../constants";

const Title = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading fontSize="120px" style={{ textAlign: "left", lineHeight: 1 }}>
        Bootstrapping <span style={{ color: colors.red }}>web performance</span>{" "}
        culture
      </Heading>
    </FlexBox>
    <Notes>
      I’m glad to speak about bootstrapping web performance culture. My talk is
      based on the experience I got introducing web performance culture in the
      company I worked for. But first let me introduce myself.
    </Notes>
  </Slide>
);

export default Title;
