import React from "react";
import { Slide, FlexBox, Image, Notes, Link } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/elqsdYqQEefWJbUM2qMO.svg" />
      <Link style={{ color: colors.blue }} href="https://web.dev/lcp/">
        web.dev/lcp
      </Link>
    </FlexBox>
    <Notes>
      LCP is metric - indicates how fast the content is loaded. Not just a
      content, but the largest elements on the page. It could be an image or a
      paragraph, or a large title.
    </Notes>
  </Slide>
);

export default Slide1;
