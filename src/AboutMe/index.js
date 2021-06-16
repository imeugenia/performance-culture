import React from "react";
import {
  Slide,
  FlexBox,
  Heading,
  Grid,
  Box,
  Text,
  Image,
  Notes,
} from "spectacle";
import me from "./me.png";

const Slide4 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15} height="100%">
      <Box padding="1rem">
        <Heading
          margin={0}
          padding={0}
          textAlign="left"
          lineHeight={1}
          marginBottom="1rem"
        >
          Eugenia
        </Heading>
        <Text color="secondary">Web Developer at Gorillas, Berlin</Text>
        <Text color="secondary">Google Developer Group organizer</Text>

        {/* <Text color="secondary">
          <Link
            style={{ display: "block" }}
            href="https://twitter.com/jevgeniazi"
          >
            @jevgeniazi
          </Link>
          <Link style={{ display: "block" }} href="https://imeugenia.com/">
            imeugenia.com
          </Link>
        </Text> */}
      </Box>
      <Box>
        <FlexBox height="100%">
          <Image src={me} />
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      My name is Eugenia. Originally I’m from Latvia but I moved to Berlin 3
      years ago. I work as a web developer at Gorillas. Gorillas is a grocery
      delivery startup based in Berlin but expanding super fast in other cities
      across the globe. In the past, I was very involved in the Google Developer
      Group community organizing conferences and smaller events. But now I'm
      more dedicated to sharing knowledge by doing public speaking.
    </Notes>
  </Slide>
);

export default Slide4;
