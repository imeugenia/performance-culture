import React from "react";
import { Slide, Heading, Grid, Box, Text, Notes } from "spectacle";

const Slide11 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
      <Box padding="1rem" backgroundColor="quinary" borderRadius="20px">
        <Heading
          margin={0}
          padding={0}
          textAlign="left"
          lineHeight={1}
          marginBottom="1rem"
        >
          Web-perf hackathon
        </Heading>
        <Text>
          * work together
          <br /> * analyze web pages
          <br /> * find perf issues
          <br /> * brainstorm solutions
          <br /> * present results
        </Text>
      </Box>
      <Box padding="1rem">
        <iframe
          src="https://giphy.com/embed/gF2m2JOyGReppog8hU"
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>
    </Grid>
    <Notes>
      Few months later, we organized a hackathon for web developers across
      different teams. We worked in pairs analyzing different pages on our
      website and web application. We were using such tools as Lighthouse,
      Performance and Network tabs in dev tools and Webpagetest. Our goal was to
      find all major performance bottlenecks, estimate their impact on the
      performance and brainstorm about how we could solve it. At the end of the
      hackathon each group was presenting their results to exchange experience
      and get some feedback. It was a great event not only in terms of raising
      awareness about web performance across teams but also a good team-building
      exercise. It was even suggested to us to run such hackathons quarterly.
    </Notes>
  </Slide>
);

export default Slide11;
