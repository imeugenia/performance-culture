import React from "react";
import {
  Slide,
  FlexBox,
  Heading,
  Grid,
  Box,
  Image,
  Link,
  Text,
  Notes,
} from "spectacle";

const Slide11 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
      <Box padding="1rem">
        <Heading
          style={{ marginLeft: 0, paddingLeft: 0 }}
          textAlign="left"
          lineHeight={1}
        >
          Chrome UX report in Datastudio
        </Heading>
        <Link
          style={{ display: "block" }}
          href="https://web.dev/chrome-ux-report-data-studio-dashboard/"
        >
          How to configure it
        </Link>

        <Link href="https://datastudio.google.com/reporting/e37e5e07-01d8-47fd-bbf6-fcf5cbe12b68">
          Example
        </Link>
        <Text color="secondary">
          👍 Zero config
          <br />
          👎 Updated monthly
          <br />
          👎 Tracks only home page
          <br />
        </Text>
      </Box>
      <Box>
        <FlexBox>
          <Image
            width="100%"
            src="https://web-dev.imgix.net/image/admin/h8iCTgvmG4DS2zScvatc.png?auto=format&w=1600"
          />
        </FlexBox>
      </Box>
    </Grid>
    <Notes>
      The next opportunity you can use is Chrome UX report visualised in Data
      Studio. Here is the link with the tutorial on how to set it up. Chrome UX
      report data is publicly available, so you can create a dashboard for any
      website you want. The disadvantages are that the data is updated only once
      per month. However, it’s great that you don’t need to configure anything
      yourself.
    </Notes>
  </Slide>
);

export default Slide11;
