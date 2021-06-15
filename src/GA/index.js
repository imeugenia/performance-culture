import React from "react";
import {
  Slide,
  FlexBox,
  Heading,
  Grid,
  Box,
  Image,
  Text,
  Notes,
} from "spectacle";

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
          Google Analytics
        </Heading>
        <Text color="secondary">
          👍 Bounce, convertion rate, etc.
          <br />
          👎 Not user-oriented metrics
          <br />
          👎 Only average data
          <br />
          👍 Page load time distribution
          <br />
        </Text>
      </Box>
      <Box>
        <FlexBox>
          <Image height="100%" src="https://i.stack.imgur.com/94VHX.png" />
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      The next tool is Google Analytics. The main advantage of using it is that
      you can correlate your page loading times with such rates like bounce and
      conversion. By default it doesn’t provide you with user-oriented data like
      Web Vitals. It shows page loading time that is calculated as an interval
      between navigation start and load event end. And the value is average. I
      will explain why the average value is not a good measure in the upcoming
      slides. One more good thing about GA is that you can see page load time
      distribution. The example on the picture shows how many users the page is
      loaded within 1 second, 1-3 send etc.{" "}
    </Notes>
  </Slide>
);

export default Slide11;
