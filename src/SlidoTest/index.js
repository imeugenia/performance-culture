import React from "react";
import { Slide, FlexBox, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <iframe
        src="https://wall.sli.do/event/4g3g1dre?section=29396b5b-9fcc-4195-ab66-7039b94f5310"
        height="100%"
        width="100%"
        frameBorder="0"
        style={{ minHeight: "560px" }}
        title="Slido"
      ></iframe>
    </FlexBox>
    <Notes>
      Which performance metrics you would track? You can use this QR code or
      join at slido.com to answer this question. I have added one example Time
      to interactive. Join me in adding more ideas, it is anonymous!
    </Notes>
  </Slide>
);

export default Slide1;
