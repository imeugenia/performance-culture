import React from "react";
import { Slide, FlexBox, Heading, Box, Text, Notes, Link } from "spectacle";
import { colors } from "../constants";

const Slide1 = () => (
  <Slide padding="5rem">
    <Heading margin={0} fontSize="60px">
      Median vs Average vs Percentile
    </Heading>
    <FlexBox height="100%" style={{ justifyContent: "space-between" }}>
      <Box>
        <Heading color={colors.red}>4.7</Heading>
        <Text>Median LCP</Text>
      </Box>
      <Box>
        <Heading color={colors.red}>5.3</Heading>
        <Text>Average LCP</Text>
      </Box>
      <Box>
        <Heading color={colors.green}>6.2</Heading>
        <Text>75p LCP</Text>
      </Box>
      <Box>
        <Heading color={colors.green}>9.9</Heading>
        <Text>95p LCP</Text>
      </Box>
    </FlexBox>
    <Link
      style={{ textAlign: "center" }}
      href="https://web.dev/defining-core-web-vitals-thresholds/"
    >
      Google suggests 75 percentile
    </Link>
    <Notes>
      This is LCP results for the same website, period of time and device. See
      how different the numbers are although they reflect the same situation.
      The average is not a good measurement of the tendency. One single user
      with an unusually slow device and network can push the number up. Median
      is a better metric because it tells us how fast the page is for 50% of our
      users. However, fast page speed results for only half of users isn’t
      really a good result. That is why a percentile is a better choice. That
      shows us how fast the page is for 75 percent of our users or 95 percent of
      users. So it is always better to use a percentile in the calculation of
      web performance metrics. Google suggests using 75 percentile.
    </Notes>
  </Slide>
);

export default Slide1;
