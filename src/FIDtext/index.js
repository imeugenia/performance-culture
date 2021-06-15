import React from "react";
import { Slide, FlexBox, Image, Notes, Link } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eXyvkqRHQZ5iG38Axh1Z.svg" />
      <Link style={{ color: colors.blue }} href="https://web.dev/fid/">
        web.dev/fid
      </Link>
    </FlexBox>
    <Notes>
      FID indicates how fast the page becomes interactive. It is a time interval
      between first user interaction and browser response. The lower this number
      is, the better.
    </Notes>
  </Slide>
);

export default Slide1;
