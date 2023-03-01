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
import { $image_api } from "../../../../../api";
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
import { StatusChip } from "../../../../../components/ui/Chip";
import { IAnnouncement } from "../../../../../types/Announcement/Announcement.type";
import { IMarketOrderResponse } from "../../../../../types/Order/IMarketOrder";
import { IGetOrderResponse } from "../../../../../types/Order/IOrder";
import numberWithSpaces from "../../../../../utils/numberWithSpaces";

const tableHead = ["Артикул", "Общая стоимость", "Статус"];

interface Props {
  tableData: IMarketOrderResponse;
}

const ContentListTable: FC<Props> = ({ tableData }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/app/order/one/${id}`);
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
          {tableData.data.map((row) => (
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
                  >
                    {/* {row?.images[0]?.imageUrl && (
                      <img
                        src={`${$image_api}/${row.images[0].imageUrl}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    )} */}
                  </Box>
                  <Stack justifyContent={"center"}>
                    <Typography>Заказ {row.id}</Typography>
                  </Stack>
                </Stack>
              </StyledBodyCellFirst>

              <StyledBodyCell>
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                  {`${numberWithSpaces(Number(row.totalPrice.toFixed(2)))} KZT`}
                </Typography>
              </StyledBodyCell>

              <StyledBodyCell>
                <StatusChip status={row.status} />
              </StyledBodyCell>

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
