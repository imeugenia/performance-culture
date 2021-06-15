import React from "react";
import { Slide, FlexBox, Heading, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px">Let&apos;s sum up!</Heading>
    </FlexBox>
    <Notes>It was lots of informations. Let's sum up the main points</Notes>
  </Slide>
);

export default Slide1;
