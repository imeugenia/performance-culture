import React from "react";
import { Slide, FlexBox, Heading, Image, Notes } from "spectacle";
import stakeholders from "./stakeholders.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%">
      <Heading textAlign="left">Engage with stake- holders</Heading>
      <Image height="100%" src={stakeholders} />
    </FlexBox>
    <Notes>
      There is a certain group of people you should pay more attention to. These
      are direct stakeholders who in one way or another are connected with the
      user experience on the website. Not only web developers, but also PO,
      designers, SEO or another marketing specialist. It makes sense to share it
      with your supervisor as well because they might give you necessary
      support.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
