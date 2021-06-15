import React from "react";
import { Slide, FlexBox, Heading, Text, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
      <Heading style={{ textAlign: "left" }}>Why these metrics?</Heading>
      <Text>
        * introduced by Google
        <br />* Core Web Vitals
        <br />* included in search ranking
        <br />* performance dev/monitoring tools are using them
      </Text>
    </FlexBox>
    <Notes>
      Why these metrics? These 3 metrics were introduced by Google and are
      called Core Web Vitals. Exactly these metrics are included in search
      ranking. Majority of performance tools are using them by default. You will
      see them in Lighthouse, Webpagetest and many monitoring services.
    </Notes>
  </Slide>
);

export default Slide1;
