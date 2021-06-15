import React from "react";
import { FlexBox, Notes, Slide } from "spectacle";

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <FlexBox>
      <iframe
        src="https://giphy.com/embed/jTrhsQZll4X9XWHBPm"
        width="400"
        height="480"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </FlexBox>
    <Notes>
      So many people to talk to! It’s not easy to present your ideas in public.
      Especially when it what you ask for requires resources and changing the
      development process. It’s even more difficult when a company has other
      business priorities and you need to prove that web performance should be
      one of them. I’m quite an introverted person. For me it is much easier to
      have a one on one conversation rather than actively speaking in a group of
      people. Knowing that I have such a trait, at the beginning I was talking
      to the stakeholders personally. It gave me a chance to learn about their
      opinion about the topic and show my proactiveness in leading the
      initiative. Everyone understood the problem and agreed that it should be
      solved.
    </Notes>
  </Slide>
);

export default Slide1;
