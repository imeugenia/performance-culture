import React from "react";
import { Slide, FlexBox, Image, Notes, Heading } from "spectacle";
import webpagetest from "./webpagetest.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading>www.webpagetest.org</Heading>
      <Image height="70%" src={webpagetest} />
    </FlexBox>
    <Notes>
      If you don't have the opportunity to do RUM you can try synthetic
      performance tests. You can use webpagetest that provides you with a
      variety of locations across the globe, network connection and device
      types.
    </Notes>
  </Slide>
);

export default Slide1;
