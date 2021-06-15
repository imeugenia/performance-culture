import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image src="https://web-dev.imgix.net/image/admin/krOoeuQ4TWCbt9t6v5Wf.svg" />
    </FlexBox>
    <Notes>
      It is a time interval between first user interaction and browser response.
      The lower this number is, the better.
    </Notes>
  </Slide>
);

export default Slide1;
