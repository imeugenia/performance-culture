import React from "react";
import { Slide, FlexBox, Heading, Grid, Box, Text, Notes } from "spectacle";

const Slide4 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15} height="100%">
      <Box padding="1rem" backgroundColor="quinary" borderRadius="20px">
        <Heading
          margin={0}
          padding={0}
          textAlign="left"
          lineHeight={1}
          marginBottom="1rem"
        >
          Proactive problem solving
        </Heading>
        <Text color="secondary">
          Acting before the incident
          <br />
          No panic
          <br />
          Needs more time
          <br />
          Sustainable
          <br />
        </Text>
      </Box>
      <Box>
        <FlexBox height="100%">
          <iframe
            src="https://giphy.com/embed/yW8gdZiUZPAIjrtY7F"
            width="480"
            height="273"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      On the other hand, we could be Proactive and use a more sustainable
      approach where we think about web performance on a day-to-day basis,
      introducing web-performance into the development process, and developing
      web performance culture in the company. It would prevent many many
      performance issues before they actually arise. There won't be any panic
      and rush, although such an approach means slowing down the development
      process. Solving a problem in a proactive way would be harder, slower but
      much better in the long-term.
    </Notes>
  </Slide>
);

export default Slide4;
