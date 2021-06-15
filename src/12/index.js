import React from "react";
import { Slide, FlexBox, Heading, Image, Text } from "spectacle";
import wtf from "./wtf.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
      <Heading margin={0}>The way of changing the game</Heading>
      <Image src={wtf} width="100%" />
    </FlexBox>
  </Slide>
);

export default Slide1;
