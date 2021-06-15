import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";
import bounceRate from "./image.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image width="100%" src={bounceRate} />
    </FlexBox>
    <Notes>
      I tried to correlate bounce rate with page loading time. However, in my
      case there was just a slight positive correlation. There are so many
      reasons why people abandon the website that it makes it hard to relate
      only to web performance. It could be irrelevant content, bad UX,
      misleading meta title, description, technical error, not mobile friendly.
      But it doesn't mean that web perf doesn't affect the business of your
      company.
    </Notes>
  </Slide>
);

export default Slide1;
