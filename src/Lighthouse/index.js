import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";
import demo from "./demo.gif";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image height="100%" src={demo} />
    </FlexBox>
    <Notes>
      To get an overall idea of the page performance you can run lighthouse
      tests locally using Chrome dev tools. The test report is not just showing
      the important page metrics, it also gives you a list of suggestions on
      what can be improved. So it’s a very good development tool.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
