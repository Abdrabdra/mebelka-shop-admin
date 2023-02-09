import {
  Box,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import ChipStatus from "../../../../../components/Chip/ChipStatus";
import {
  StyledBodyCell,
  StyledBodyCellFirst,
  StyledBodyCellLast,
  StyledBodyRow,
  StyledHeadCell,
  StyledHeadRow,
  TableDivider,
} from "../../../../../components/Table/TableRounded/TableRounded.module";
import {
  IAdminAnnouncement,
  IAnnouncement,
} from "../../../../../types/Announcement/Announcement.type";
import numberWithSpaces from "../../../../../utils/numberWithSpaces";

const tableHead = ["Объявление", "Статус", "Категория"];

interface Props {
  tableData: IAdminAnnouncement[];
}

const ContentListTable: FC<Props> = ({ tableData }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/app/announcement/one/${id}`);
  };

  return (
    <TableContainer component={Box}>
      <Table
        sx={{ minWidth: 650, boxShadow: "none" }}
        aria-label="simple table"
      >
        <TableHead sx={{ position: "relative" }}>
          <StyledHeadRow key={new Date().getTime()}>
            {tableHead.map((row) => (
              <StyledHeadCell>{row}</StyledHeadCell>
            ))}
          </StyledHeadRow>
          <TableDivider />
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <StyledBodyRow key={row.id}>
              <StyledBodyCellFirst>
                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      borderRadius: "10px",
                      minWidth: "60px",
                      width: "60px",
                      height: "60px",
                    }}
                  ></Box>
                  <Stack justifyContent={"center"}>
                    <Typography variant="h6" sx={{ color: "#2DC36A" }}>
                      {`${numberWithSpaces(row.price)} KZT`}
                    </Typography>
                  </Stack>
                </Stack>
              </StyledBodyCellFirst>
              <StyledBodyCell>
                <ChipStatus status={row.status} />
              </StyledBodyCell>
              <StyledBodyCell>Мебель</StyledBodyCell>
              <StyledBodyCellLast>
                <MainBaseButton
                  onClick={() => handleNavigate(row.id)}
                  bgcolor="#2DC36A"
                  sx={{ height: "40px", maxWidth: "180px" }}
                >
                  Подробнее
                </MainBaseButton>
              </StyledBodyCellLast>
            </StyledBodyRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContentListTable;
