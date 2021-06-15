import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
      <Image
        src="https://docs.newrelic.com/static/98ad878ffa7b586b779178656f19ec58/01dfe/browser_intro_0.png"
        width="100%"
      />
    </FlexBox>
    <Notes>
      If you are not collecting the RUM data yet, check the monitoring tools you
      already use in your company. For example, in my case we were using New
      Relic and at that time New Relic just introduced Web Vitals in their
      browser monitoring tool. I didn’t need to do anything in order to collect
      data apart from creating custom dashboards for a better view and analysis.
      In this picture you may see an example of the default browser metrics
      dashboard in New Relic. It consists of core web vitals, user time spent on
      the site, more detailed data like FE time vs BE time, so you can see where
      the performance bottleneck is. It’s not only New Relic that has such
      features. I recently checked Datadog and Sentry. They also provide similar
      dashboards.
    </Notes>
  </Slide>
);

export default Slide1;
