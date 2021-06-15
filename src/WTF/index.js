import React from "react";
import { Slide, FlexBox, Heading, Image, Notes } from "spectacle";
import wtf from "./wtf.png";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
      <Heading margin={0}>The way of changing the game</Heading>
      <Image src={wtf} width="100%" />
    </FlexBox>
    <Notes>
      At my work we have a mindset that guides us on the way of changing the
      game. It says that we should challenge everything and get frustrated. We
      shouldn’t be silent about things that disappoint us. Instead we should be
      vocal and let people know about the problem. Especially those who own the
      topic. We need to engage with them. We should actively suggest a solution
      and be a role model in taking the first action. We can follow the same
      steps when bootstrapping a web performance culture in our organization.
    </Notes>
  </Slide>
);

export default Slide1;
