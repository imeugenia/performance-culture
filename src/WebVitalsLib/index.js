import React from "react";
import { Slide, Heading, Grid, Box, CodePane, Text, Notes } from "spectacle";
import { colors } from "../constants";

const Slide11 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
      <Box padding="1rem">
        <Heading textAlign="left" lineHeight={1} marginBottom="1rem">
          Web Vitals library
        </Heading>
        <Text color="secondary">
          Send metrics to GA using{" "}
          <a
            style={{ color: colors.blue }}
            href="https://www.npmjs.com/package/web-vitals"
          >
            Web Vitals library
          </a>
        </Text>
      </Box>
      <Box>
        <CodePane language="js" width="auto" style={{ width: "unset" }}>{`
        import {getCLS, getFID, getLCP} from 'web-vitals';

        function sendToGoogleAnalytics({name, delta, id}) {
          ga('send', 'event', {
            eventCategory: 'Web Vitals',
            eventAction: name,
            eventLabel: id,
            eventValue: Math.round(name === 'CLS' ? 
              delta * 1000 : delta),
            nonInteraction: true,
            transport: 'beacon',
          });
        }
        
        getCLS(sendToGoogleAnalytics);
        getFID(sendToGoogleAnalytics);
        getLCP(sendToGoogleAnalytics);
        `}</CodePane>
      </Box>
    </Grid>
    <Notes>
      As I said by default there are no user-oriented page timings in GA. But
      there is a javascript library “Web vitals” that helps you to send such
      data to GA yourself. Here is an example of how you can do it. There are
      multiple functions like getCLS, getLCP that receive a callback once a
      particular metric is captured. So once a metric is captured it triggers a
      method that sends a custom event to GA.
    </Notes>
  </Slide>
);

export default Slide11;
