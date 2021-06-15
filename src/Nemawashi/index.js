import React from "react";
import { Slide, Heading, Grid, Box, Text, Notes } from "spectacle";

const Slide11 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
      <Box padding="1rem">
        <Heading
          margin={0}
          padding={0}
          textAlign="left"
          lineHeight={1}
          marginBottom="1rem"
        >
          Nemawashi technique
        </Heading>
        <Text>
          <i>going around the roots</i>
        </Text>
        <Text>
          quietly laying foundation for changes, by talking to people, gathering
          support and feedback
        </Text>
      </Box>
    </Grid>
    <Notes>
      It turned out there is a special name for the technique I was using
      naturally. It is called Nemawashi and comes from the Japanese work
      culture. If you translate it from japanese it would mean going around the
      roots. Before proposing anything officially you are quietly laying the
      foundation for the changes you want to propose. You are talking to people,
      gathering support and feedback, and so on. By doing that you have a chance
      to improve your proposal based on the feedback received. You also will see
      the problem from different points of view.
    </Notes>
  </Slide>
);

export default Slide11;
