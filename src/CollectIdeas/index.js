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
      Collect improvement ideas
    </Heading>
    <Table border="3px solid" borderColor={colors.blue}>
      <TableHeader>
        <TableRow>
          <TableCell borderRight="3px solid" {...headerCellProps}>
            Improvement
          </TableCell>
          <TableCell borderRight="3px solid" {...headerCellProps}>
            Estimated impact
          </TableCell>
          <TableCell {...headerCellProps}>Estimated effort</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody style={{ verticalAlign: "text-top" }}>
        <TableRow>
          <TableCell {...bodyCellProps}>
            <div>Lazy-load library “X”</div>
          </TableCell>
          <TableCell {...bodyCellProps}>
            <div>High: up to 500ms LCP improvement</div>
          </TableCell>
          <TableCell padding="1rem">Low</TableCell>
        </TableRow>
        <TableRow>
          <TableCell {...bodyCellProps}>
            <div>Add Lighthouse audits to the CI/CD pipeline</div>
          </TableCell>
          <TableCell {...bodyCellProps}>
            <div>High: Prevent issues before they are deployed </div>
          </TableCell>
          <TableCell padding="1rem">Medium</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Notes>
      I started by asking my teammates to share their ideas on how to improve
      the current website performance. There was a table that looked similar to
      this one. It consisted of a brief description of an idea, estimated effort
      and estimated impact.{" "}
    </Notes>
  </Slide>
);

export default Slide1;
