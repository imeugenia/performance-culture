import React from "react";
import { Slide, Heading, Image, Notes } from "spectacle";
import webVitals from "./web-vitals.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Heading margin={0}>Web Vitals</Heading>
    <Image style={{ borderRadius: "20px" }} src={webVitals} width="100%" />
    <Notes>
      As I already mentioned there are plenty of metrics you may find when
      trying to collect data but for the sake of simplicity for yourself and for
      others try to focus just on a few of them, in particular Web Vitals.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
