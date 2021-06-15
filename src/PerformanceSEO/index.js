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
        Web performance has{" "}
        <a
          style={{ color: colors.blue }}
          href="https://developers.google.com/search/blog/2021/04/more-details-page-experience"
        >
          effect on Google’s search engine ranking
        </a>
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
      As Google recently announced, starting from the mid-June your websites
      will be ranked based on web performance score (amongst other factors). So
      if you want your website appear in top search results, you must have good
      web performance.
    </Notes>
  </Slide>
);

export default Slide1;
