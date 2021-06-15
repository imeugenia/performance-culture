import React from "react";
import { Slide, FlexBox, Heading, Notes } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem">
    <FlexBox
      height="100%"
      flexDirection="column"
      style={{ alignItems: "flex-start" }}
    >
      <Heading
        style={{
          margin: 0,
          padding: 0,
          lineHeight: 1,
          color: colors.blue,
          fontSize: "150px",
        }}
      >
        &#8220;
      </Heading>
      <Heading style={{ margin: "0 0 1em", padding: 0, textAlign: "left" }}>
        High-performing sites engage and retain users better.
      </Heading>
      <Heading
        style={{
          margin: 0,
          padding: 0,
          lineHeight: 1,
          color: colors.blue,
          fontSize: "150px",
        }}
      >
        &#8221;
      </Heading>
    </FlexBox>
    <Notes>
      It is proved by many researches and individual cases that the websites
      with higher performance engage and retain users better than
      low-performance websites.
    </Notes>
  </Slide>
);

export default Slide1;
