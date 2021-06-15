import React from "react";
import {
  Slide,
  Heading,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Notes,
} from "spectacle";
import { colors } from "../constants";

const headerCellProps = {
  padding: "1rem",
  borderBottom: "3px solid",
  borderColor: colors.blue,
  width: "30%",
};

const bodyCellProps = {
  padding: "1rem",
  borderRight: "3px solid",
  borderColor: colors.blue,
  width: "30%",
};

const Slide1 = () => (
  <Slide padding="5rem" bgColor="#FFD8D8">
    <Heading style={{ textAlign: "left", marginLeft: 0, paddingLeft: 0 }}>
      Collecting data
    </Heading>
    <Table border="3px solid" borderColor={colors.blue}>
      <TableHeader>
        <TableRow>
          <TableCell borderRight="3px solid" {...headerCellProps}>
            Real user data
          </TableCell>
          <TableCell borderRight="3px solid" {...headerCellProps}>
            Synthetic data
          </TableCell>
          <TableCell {...headerCellProps}>Lab data</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody style={{ verticalAlign: "text-top" }}>
        <TableRow>
          <TableCell {...bodyCellProps}>
            <div>* Monitoring tool, eg. New Relic</div>
            <br />
            <div>* Chrome UX Report</div>
            <br />
            <div>* Google Analytics</div>
          </TableCell>
          <TableCell {...bodyCellProps}>
            <div>* WebPageTest</div>
            <br />
            <div>* Monitoring tool, eg. New Relic</div>
          </TableCell>
          <TableCell padding="1rem">Lighthouse</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Notes>
      There are also various tools you can use to collect these metrics. They
      vary based on the type of data: RUM, Synthetic, Lab data. RUM is
      self-descriptive, it gives you data collected from the real users. It is
      the most effective kind of data that gives you a true understanding of how
      your website is performing in the real world taking into account user
      network connection and devices they use. If you don’t have the possibility
      to collect that, you can try synthetic data. It is collected by simulating
      different devices, network connections and the location where the requests
      are sent from. For local development or just to get an overall picture you
      can use lab data. That is data collected when running a performance test
      on your own machine.
    </Notes>
  </Slide>
);

export default Slide1;
