import {
  Divider,
  DividerProps,
  Paper,
  TableCell,
  TableCellProps,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface Props {
  children: React.ReactNode;
}

//TABLE
const HeadRow: React.FC<Props> = ({ children }) => {
  return (
    <TableRow
      sx={{
        backgroundColor: "primary.light",
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      {children}
    </TableRow>
  );
};
const HeadCell: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      align="center"
      sx={{
        maxWidth: "50px",
        width: "0px",
        height: "40px",
        fontSize: "18px",
        color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,
      }}
    >
      {children}
    </TableCell>
  );
};

//Body
const BodyRow: React.FC<Props> = ({ children }) => {
  return (
    <TableRow
      sx={{
        backgroundColor: "primary.light",
        height: "90px",
        borderRadius: "10px",
        //color:"red"
      }}
    >
      {children}
    </TableRow>
  );
};
const BodyCellFirst: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      sx={{
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: "20",
        fontSize: "20px",
        color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "0",
          paddingLeft: "30px",
          paddingRight: "16px",
          height: "90px",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        {children}
      </Paper>
    </TableCell>
  );
};
const BodyCell: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      sx={{
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: "20",
        paddingLeft: 0,
        fontSize: "20px",
        color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "0",
          paddingRight: "16px",
          paddingLeft: "16px",
          height: "90px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        {children}
      </Paper>
    </TableCell>
  );
};
const BodyCellLast: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      sx={{
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: "20",
        fontSize: "20px",
        color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "0",
          paddingLeft: "16px",
          paddingRight: "16px",
          height: "90px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Paper>
    </TableCell>
  );
};

const TableDivider = styled((props: DividerProps) => <Divider {...props} />)(
  ({ theme }) => ({
    ml: "17px",
    position: "absolute",
    width: "calc(100% - 32px)",
    backgroundColor: "primary.main",
  })
);

export const Styled = {
  TableDivider,
  HeadRow,
  HeadCell,
  BodyRow,
  BodyCellFirst,
  BodyCell,
  BodyCellLast,
};
