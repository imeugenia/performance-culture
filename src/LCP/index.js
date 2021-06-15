import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";
import LCP from "./LCP.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image src={LCP} height="100%" />
    </FlexBox>
    <Notes>
      For example, in the case of Gorillas landing page it is this video. In
      order to understand what is the LCP on your page you can use a Performance
      tab in the browser devtools. It will show you different timing metrics and
      corresponding elements that are attached to a particular metric.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
