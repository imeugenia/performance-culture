import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";
import priorities from "./priorities.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image height="100%" src={priorities} />
    </FlexBox>
    <Notes>
      Later we gave a priority to each idea by looking at their impact vs
      effort. The ideas with the most priority were put into the work plan of
      the next quarter. Our product owner was actively involved in this process.
      Not all ideas went to our todo list in the result. Only tasks with high
      impact and lower effort were going to be worked on. By doing that we
      accomplished both: including web performance tasks into the plan of the
      next quarter without sacrificing other business priorities.
    </Notes>
  </Slide>
);

export default Slide1;
