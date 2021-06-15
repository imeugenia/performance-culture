import React from "react";
import { Slide, FlexBox, Heading, Grid, Box, Text } from "spectacle";

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
          Web-perf guidelines
        </Heading>
        <Text color="secondary">
          * What are web-vitals and how to set realistic goals?
          <br />
          * How to set up monitoring
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
  </Slide>
);

export default Slide4;
