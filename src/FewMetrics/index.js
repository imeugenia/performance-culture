import React from "react";
import { Slide, Heading, Image, Notes } from "spectacle";
import metrics from "./fewmetrics.png";

const Slide1 = () => (
  <Slide padding="5rem" backgroundColor="quinary">
    <Heading margin={0}>We need just 3 🧘</Heading>
    <Image src={metrics} width="100%" />
    <Notes>
      To keep it simple but still effective we can use only Largest Contentful
      Paint and First Input Delay (sometimes you will meet it as Total Blocking
      time). Additionally we can check another UX aspect called CLS that informs
      us about visual web page layout stability. Let’s take a closer look at
      what these metrics mean.
    </Notes>
  </Slide>
);

export default Slide1;
