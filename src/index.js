import React from "react";
import ReactDOM from "react-dom";

import { FlexBox, FullScreen, Progress, Deck, Box } from "spectacle";
import Title from "./Title";
import Slide0 from "./AboutMe";
import Slide1 from "./StoryBegins";
import StoryBegins1 from "./StoryBegins1";
import Slide2 from "./StoryBegins2";
import Slide3 from "./Thinking";
import Slide4 from "./Reactive";
import Slide5 from "./Proactive";
import Slide6 from "./DevLifecycle";
import Slide7 from "./WTF";
import Slide8 from "./GetFrustrated";
import PerformanceMatters from "./PerformanceMatters";
import PerformanceMattersExamples from "./PerformanceMattersExamples";
import BounceRate from "./BounceRate";
import PerformanceSEO from "./PerformanceSEO";
import Slide9 from "./BeVocal";
import Slide11 from "./CollectingData";
import ManyMetrics from "./ManyMetrics";
import Slide14 from "./FewMetrics";
import WhyWebVitals from "./WhyWebVitals";
import SlidoTest from "./SlidoTest";
import FID from "./FID";
import FIDtext from "./FIDtext";
// import FIDdiagram from "./FIDdiagram";
import LCPtext from "./LCPtext";
import LCP from "./LCP";
import CLStext from "./CLStext";
import CLS from "./CLS";
import WebVitals from "./WebVitals";
import Average from "./Average";
import Webpagetest from "./Webpagetest";
import Lighthouse from "./Lighthouse";
import Slide16 from "./NewRelic";
import Slide17 from "./CrUX";
import Slide18 from "./GA";
import PageLoadTimeGA from "./PageLoadTimeGA";
import Slide19 from "./WebVitalsLib";
import Slide20 from "./SpeakMore";
import Slide21 from "./Stakeholders";
import Slide22 from "./Introverted";
import Slide23 from "./Nemawashi";
import SolutionAction from "./SolutionAction";
import Slide25 from "./CollectIdeas";
import Slide26 from "./Hackathon";
import Strategy from "./Strategy1";
import Prioritization from "./Prioritization";
import Summary from "./Summary";
import Conclusion1 from "./Conclusion1";
import Conclusion2 from "./Conclusion2";
import Conclusion3 from "./Conclusion3";
import Conclusion4 from "./Conclusion4";
import Conclusion5 from "./Conclusion5";
import Conclusion6 from "./Conclusion6";
import Questions from "./Questions";
import { colors } from "./constants";

const theme = {
  fonts: {
    header: '"IBM Plex Mono", monospace',
    text: '"IBM Plex Mono", monospace',
  },
  colors: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#FFD8D8",
    quaternary: colors.blue,
    quinary: "#FFFFFF",
  },
  fontSizes: {
    header: "64px",
    paragraph: "28px",
    text: "2rem",
  },
  radii: {
    box: "20px",
  },
  lineHeights: {
    header: 1,
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Title />
    <Slide0 />
    <Slide1 />
    <StoryBegins1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Slide5 />
    <Slide6 />
    <Slide7 />
    <Slide8 />
    <PerformanceMatters />
    <PerformanceMattersExamples />
    <BounceRate />
    <PerformanceSEO />
    <Slide9 />
    <SlidoTest />
    <ManyMetrics />
    <Slide14 />
    <WhyWebVitals />
    <LCPtext />
    <LCP />
    <FIDtext />
    {/* <FIDdiagram /> */}
    <FID />
    <CLStext />
    <CLS />
    <WebVitals />
    <Slide11 />
    <Slide16 />
    <Slide17 />
    <Slide18 />
    <PageLoadTimeGA />
    <Slide19 />
    <Average />
    <Webpagetest />
    <Lighthouse />
    <Slide20 />
    <Slide21 />
    <Slide22 />
    <Slide23 />
    <SolutionAction />
    <Slide25 />
    <Prioritization />
    <Slide26 />
    <Strategy />
    <Summary />
    <Conclusion1 />
    <Conclusion2 />
    <Conclusion3 />
    <Conclusion4 />
    <Conclusion5 />
    <Conclusion6 />
    <Questions />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
