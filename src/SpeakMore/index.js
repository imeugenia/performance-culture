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
          Raise awareness!
        </Heading>
        <Text color="secondary">
          Lunch&learn or similar events
          <br />
          <br />
          Engineering meetings
          <br />
          <br />
          Organize a meeting yourself
        </Text>
      </Box>
      <Box>
        <FlexBox height="100%">
          <iframe
            src="https://giphy.com/embed/24depzSrxxZeoRwY86"
            width="480"
            height="480"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      Once you have collected data, you should raise awareness about it. You
      could present at the lunch and learn or another knowledge sharing event .
      Show it during engineering alignment meetings. Or if you don’t have any,
      just organize it yourself and invite everyone who might be interested. You
      can do it several times. I personally did a presentation about 5 or 6
      times. It wasn’t the same one and not to the same group of people. I
      showed data that I got from different sources. For example, oncle I
      learned about CrUX report in datastudio I presented it, then I created a
      custom dashboard in New Relic and I presented how this monitoring tool can
      useful for web developers.
    </Notes>
  </Slide>
);

export default Slide4;
