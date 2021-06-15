import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";
import fid from "./fid.gif";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image height="100%" src={fid} />
    </FlexBox>
    <Notes>
      To give you a real example, FID would be captured when I open the page and
      click the menu button. FID would be the time it would take for the menu to
      open.
    </Notes>
  </Slide>
);

export default Slide1;
