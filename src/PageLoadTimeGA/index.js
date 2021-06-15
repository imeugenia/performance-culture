import React from "react";
import { Slide, FlexBox, Image, Notes, Heading } from "spectacle";
import pageLoadTime from "./pageLoadTime.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Heading>Page Load Time </Heading>
    <FlexBox height="100%" flexDirection="column">
      <Image width="100%" src={pageLoadTime} />
    </FlexBox>
    <Notes>
      If we look on the same page loading strip I showed you before. Page load
      time would be captured somewhere in the middle of the whole page loading
      experience on this particular website. In this case, page load time does
      not represent UX at all.
    </Notes>
  </Slide>
);

export default Slide1;
