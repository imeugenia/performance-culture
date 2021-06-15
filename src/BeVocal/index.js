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
          Be vocal
        </Heading>
        <Text color="secondary">
          Collect data
          <br />
          <br />
          Present it to the team/company
        </Text>
      </Box>
      <Box>
        <FlexBox height="100%">
          <iframe
            src="https://giphy.com/embed/hrFKNnKvugrWvN4kSo"
            width="369"
            height="480"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      Once we know that web performance is a real problem, we should speak about
      it as much as possible with our teammates and across the company. We need
      to make the problem visible and tangible not only for us but also for the
      rest of the people who are somehow involved in the website. But first, we
      should collect data. What kind of data one may ask.
    </Notes>
  </Slide>
);

export default Slide4;
