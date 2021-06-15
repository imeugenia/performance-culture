import React from "react";
import { Slide, Heading, Image, Notes } from "spectacle";
import metrics from "./metrics.png";

const Slide1 = () => (
  <Slide padding="5rem" backgroundColor="quinary">
    <Heading margin={0}>So many metrics 🤯</Heading>
    <Image src={metrics} width="100%" />
    <Notes>
      There are so many metrics out there. Here is the strip of page loading
      screenshots of the web application on a mobile device. And you can see on
      what point of time a particular metric is captured. This is not the whole
      list of timing events that are triggered during the page load time. Some
      of them are purely technical like time to start rendering or time to DOM
      loaded. Some of them are more oriented to the real UX like First
      Contentful Paint or Time to Interactive. As primarily we focus on the user
      and business, user oriented metric would reflect the problem best of all.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
