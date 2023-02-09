import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import { FC } from "react";
import {
  StyledBodyCell,
  StyledBodyCellFirst,
  StyledBodyCellLast,
  StyledBodyRow,
  StyledHeadCell,
  StyledHeadRow,
  TableDivider,
} from "./TableRounded.module";

interface Props {
  tableHead: string[];
  tableBody: any[];
}

const TableRounded: FC<Props> = ({ tableHead, tableBody }) => {
  return (
    <TableContainer component={Box}>
      <Table
        sx={{ minWidth: 650, boxShadow: "none" }}
        aria-label="simple table"
      >
        <TableHead sx={{ position: "relative" }}>
          <StyledHeadRow>
            <StyledHeadCell>asd</StyledHeadCell>
          </StyledHeadRow>
          <TableDivider />
        </TableHead>

        <TableBody>
          <StyledBodyRow>
            <StyledBodyCellFirst>asd</StyledBodyCellFirst>
            <StyledBodyCell>asd</StyledBodyCell>
            <StyledBodyCell>asd</StyledBodyCell>
            <StyledBodyCell>asd</StyledBodyCell>
            <StyledBodyCellLast>asd</StyledBodyCellLast>
          </StyledBodyRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableRounded;
