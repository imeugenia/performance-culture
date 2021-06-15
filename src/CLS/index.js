import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image
        src="https://miro.medium.com/max/816/0*z4W-X8OXDAZKsvUQ"
        height="100%"
      />
    </FlexBox>
    <Notes>
      The CLS of my website was very bad. As you see the images are loaded first
      and then the text content arrives causing a huge layout shift. It was
      because I loaded the text content dynamically from the CMS and it arrived
      later than the images I had directly in the codebase. The CLS for such a
      page was around 0.7 which is way more than the best practise of 0.1.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
