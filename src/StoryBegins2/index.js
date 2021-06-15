import React from "react";
import { VictoryPie, VictoryLabel, VictoryAnimation } from "victory";
import { Stepper, Slide, Box, Grid, Heading, FlexBox, Notes } from "spectacle";

const Pie = () => {
  const [percent, setPercent] = React.useState(60);

  const data = [
    { x: 1, y: percent },
    { x: 2, y: 100 - percent },
  ];

  React.useEffect(() => {
    const changePercent = () => {
      setPercent(40);
    };
    setTimeout(changePercent, 2000);

    return clearTimeout(changePercent);
  }, []);

  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%">
      <VictoryPie
        standalone={false}
        animate={{ duration: 1000 }}
        width={400}
        height={400}
        data={data}
        innerRadius={120}
        cornerRadius={25}
        labels={() => null}
        style={{
          data: {
            fill: ({ datum }) => {
              const color = datum.y > 30 ? "green" : "#FF514F";
              return datum.x === 1 ? color : "#FF514F";
            },
          },
        }}
      />
      <VictoryAnimation duration={1000} data={percent}>
        {(newPercent) => {
          return (
            <VictoryLabel
              textAnchor="middle"
              verticalAnchor="middle"
              x={200}
              y={200}
              text={`${Math.round(newPercent)}%`}
              style={{ fontSize: 45 }}
            />
          );
        }}
      </VictoryAnimation>
    </svg>
  );
};

const Slide2 = () => {
  return (
    <Slide padding="5rem" bgColor="#FFD8D8">
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15} height="100%">
        <Box padding="1rem" backgroundColor="quinary" borderRadius="20px">
          <FlexBox height="80%">
            <Heading
              margin={0}
              padding={0}
              textAlign="left"
              lineHeight={1}
              marginBottom="1rem"
            >
              Users with good page load time experience
            </Heading>
          </FlexBox>
        </Box>
        <Box>
          {/* <Stepper values={[60, 40]}>
            {(value) => <Pie percent={value} />}
          </Stepper> */}
          <Pie />
        </Box>
      </Grid>
      <Notes>
        Once I checked the performance metrics after a few months of inaction, I
        found the page load time score dropping to 40%. That was the cost of
        just shipping the features and ignoring their impact on web performance.
        It was a signal for us to change our attitude to this problem.
      </Notes>
    </Slide>
  );
};

export default Slide2;
