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
          Take the first action
        </Heading>
        <Text color="secondary">
          * Make performance improvements
          <br />
          * Add tests to the CI/CD pipeline
          <br />* Invite team to create web-perf strategy together
        </Text>
      </Box>
      <Box>
        <FlexBox height="100%">
          <iframe
            src="https://giphy.com/embed/fcsQPEE2vEdxsOkpIe"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      If not you than nobody will do it! You must take the first action in
      starting to building web performance culture. But everything you do should
      be gradual. If you propose to change the whole development process it
      might be too much and will be rejected.
    </Notes>
  </Slide>
);

export default Slide4;
