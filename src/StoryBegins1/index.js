import React from "react";
import { Slide, Image, FlexBox, Notes, Link } from "spectacle";
import dashboard from "./dashboard.gif";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%">
      <Image height="100%" src={dashboard} />
    </FlexBox>
    {/* <Link
      style={{ fontSize: "2rem" }}
      href="https://blog.chromium.org/2020/05/the-science-behind-web-vitals.html"
    >
      Why 2.5 seconds?
    </Link> */}
    <Notes>
      I created web performance dashboards similar to this one and regularly
      tested the website with the help of different tools. At that time around
      60% of our users experienced a page load time below 2.5 seconds. 2.5
      seconds loading time is considered as the best practice according to the
      user research conducted by Google. It wasn’t the best result because for
      another 40% of users the page loaded much longer. Anyways it was
      satisfactory for us. So, we carried on as usual. We kept adding new
      features and 3rd party services without any thought about performance.
      Even I forgot about it in my work routine.
    </Notes>
  </Slide>
);

export default Slide1;
