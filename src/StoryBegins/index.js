import React from "react";
import { Slide, Heading, FlexBox, Notes } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox flexDirection="column">
      <Heading lineHeight={1}>How it all began</Heading>
      <iframe
        src="https://giphy.com/embed/2t9xWdjuhTpa99pLma"
        width="480"
        height="458"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </FlexBox>
    <Notes>
      About one year ago I started to monitor the web performance at the company
      I worked for. I created web performance dashboards and regularly tested
      the website with the help of different tools .
    </Notes>
  </Slide>
);

export default Slide1;
