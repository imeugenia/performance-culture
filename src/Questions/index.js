import React from "react";
import { Slide, FlexBox, Heading, Grid, Box, Text, Link } from "spectacle";

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
          Questions?
        </Heading>
        <Text color="secondary">
          <Link
            style={{ display: "block" }}
            href="https://twitter.com/jevgeniazi"
          >
            @jevgeniazi
          </Link>
          <Link style={{ display: "block" }} href="https://imeugenia.com/">
            imeugenia.com
          </Link>
        </Text>
      </Box>
      <Box>
        <FlexBox height="100%">
          <iframe
            src="https://giphy.com/embed/5XRB3Ay93FZw4"
            width="480"
            height="270"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </FlexBox>
      </Box>
    </Grid>
  </Slide>
);

export default Slide4;
