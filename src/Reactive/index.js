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
          Reactive problem solving
        </Heading>
        <Text color="secondary">
          Effective
          <br />
          Fast
          <br />
          Sleepless nights
          <br />
        </Text>
      </Box>
      <Box>
        <FlexBox height="100%">
          <iframe
            src="https://giphy.com/embed/kf8bMrmElVACLbFCDg"
            width="480"
            height="480"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      In the web performance case reactive problem solving would look in the
      following way! We dedicate some time, maybe a sprint or 2 to firefight bad
      website performance. There are many quick wins you can do about it like
      reducing asset size and splitting up the javascript bundle, optimizing the
      fonts and images. After implementing them we would see the page speed
      boost straight away and return to our usual work routine. That would be
      very effective and fast although we might have some sleepless nights
      because of that. Such an approach helps in the short term but in the
      future it would lead us to performance problems again.
    </Notes>
  </Slide>
);

export default Slide4;
