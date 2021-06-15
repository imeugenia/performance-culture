import React from "react";
import {
  Slide,
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  Notes,
} from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column">
      <Heading>Web performance strategy</Heading>
      <UnorderedList>
        <ListItem>Goals for web-perf metrics</ListItem>
        <ListItem>Monitoring guidelines (dashboards, alerts)</ListItem>
        <ListItem>Performance testing on the CI/CD pipelines</ListItem>
        <ListItem>Regular web-perf related meetings</ListItem>
      </UnorderedList>
    </FlexBox>
    <Notes>
      One more important milestone in bringing a web performance culture to the
      company was creating a Web Performance guidelines document on how to
      handle web performance topics in a project. It suggested technical things
      like using web vitals and setting goals for these metrics, explained how
      to do monitoring, and how to set up performance tests. It also said that
      the web performance should be part of the sprint review, so the
      stakeholders are aware. It’s important to make such documentation
      transparent and open for review and feedback. Web Performance is always a
      shared goal and everything should be done in collaboration.
    </Notes>
  </Slide>
);

export default Slide1;
