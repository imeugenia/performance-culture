import React from "react";
import { Slide, FlexBox, Box, Text, Image, Notes } from "spectacle";
import pinterest from "./pinterest.png";
import vodafone from "./vodafone.png";
import yahoo from "./yahoo.png";

const Slide1 = () => (
  <Slide padding="5rem">
    <FlexBox
      height="100%"
      style={{ justifyContent: "space-between", textAlign: "center" }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image height="10em" src={pinterest} />
        <Text style={{ textAlign: "center" }}>15% increase in sign-up</Text>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image height="10em" src={vodafone} />

        <Text style={{ textAlign: "center" }}>8% increase in sales</Text>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image height="10em" src={yahoo} />
        <Text style={{ textAlign: "center" }}>15% increase in page views</Text>
      </Box>
    </FlexBox>
    <Notes>
      For example, Pinterest increased sign-up rate by 15% by improving page
      load time. Vodafone improved sales by 8% after improving time to
      contentful paint. Yahoo! Japan News increased page views by 15% after
      improving page loading experience. There are plenty on studies about web
      performance impact on the business metrics.
    </Notes>
  </Slide>
);

export default Slide1;
