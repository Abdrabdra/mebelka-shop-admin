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
import { IShop } from "../../../../../types/Shop/IShop";
import numberWithSpaces from "../../../../../utils/numberWithSpaces";

const tableHead = ["Наименование", "Номер телефона", "ID"];

interface Props {
  tableData: IShop[];
}

const ContentListTable: FC<Props> = ({ tableData }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/app/shop/${id}`);
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
                  <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                    {row.title}
                  </Typography>
                </Stack>
              </StyledBodyCellFirst>
              <StyledBodyCell>
                <Typography sx={{ fontSize: "14px" }}>{row.phone}</Typography>
              </StyledBodyCell>
              <StyledBodyCell>{row.id}</StyledBodyCell>
              <StyledBodyCellLast>
                <MainBaseButton
                  onClick={() => handleNavigate(row.id)}
                  bgcolor="primary.main"
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
