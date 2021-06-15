import React from "react";
import { Slide, FlexBox, Image, Notes, Link } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Image src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/9mWVASbWDLzdBUpVcjE1.svg" />
      <Link style={{ color: colors.blue }} href="https://web.dev/cls/">
        web.dev/cls
      </Link>
    </FlexBox>
    <Notes>
      CLS—is a metric that is not directly connected with page loading time.
      However, the page loading process from the visual point of view would
      define this score. The metric shows how often the user will see unexpected
      layout shifts during the page loading. Let’s take a look at the example.
    </Notes>
  </Slide>
);

export default Slide1;
