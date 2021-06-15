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
          Get frustrated
        </Heading>
        <Text color="secondary">
          But wait...
          <br />
          Is it a problem for a user?
        </Text>
      </Box>
      <Box>
        <FlexBox height="100%">
          <iframe
            src="https://giphy.com/embed/SvpZBq0PbWZWoni02k"
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
      First thing to do is to get frustrated about how slow the page is. But the
      slow page itself might be a problem just for you as an engineer striving
      for technical excellence. It becomes a problem for a business when it
      harms user experience and impacts business metrics like conversion and
      bounce rates. Let’s take one example. In the previous company I worked
      for, there was a web app for customer support where CS agents were able to
      check and edit the customer data. The website was for internal use only.
      When I ran performance tests simulating 3G network and a low end device
      the results were negative. However, our CS agents were provided with
      powerful laptops and were always using a high speed network in the
      company’s office. So, the fact that the website was slow on a mobile
      device is not a problem at all. When optimizing the CS web app performance
      we should focus on exactly CS agent experience. The reason why we care
      about WP is not our technical excellence. The reason is a positive impact
      on our business and showing empathy with our users.
    </Notes>
  </Slide>
);

export default Slide4;
