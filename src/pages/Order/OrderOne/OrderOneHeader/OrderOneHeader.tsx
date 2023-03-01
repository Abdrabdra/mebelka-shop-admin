import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import MainBaseButton from "../../../../components/Button/MainBaseButton/MainBaseButton";
import { MainButton } from "../../../../components/styled-components/StyledButton";
import { StatusChip } from "../../../../components/ui/Chip";
import { useUpdateOrderMutation } from "../../../../redux/store/rtk-api/order-rtk/orderEndpoints";
import { OrderStatus } from "../../../../types/Order/OrderStatus.enum";

interface Props {
  orderStatus: OrderStatus;
}

const OrderOneHeader: FC<Props> = ({ orderStatus }) => {
  const params = useParams();
  const { id } = params;

  const [status, setStatus] = useState<OrderStatus>(orderStatus);

  const [updateStatus] = useUpdateOrderMutation();

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as OrderStatus);

    id &&
      updateStatus({
        id: Number(id),
        status: event.target.value as OrderStatus,
      });
  };

  return (
    <Stack
      direction="row"
      justifyContent={"end"}
      spacing={2}
      alignItems="center"
    >
      <Stack
        spacing={2}
        direction={"row"}
        alignItems="center"
        sx={{ backgroundColor: "#fff", borderRadius: "10px", padding: "15px" }}
      >
        <Typography>Статус: </Typography>
        <StatusChip status={orderStatus} />
      </Stack>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Статус</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Статус"
            onChange={handleChange}
          >
            <MenuItem value={OrderStatus.CREATED}>В ожидании</MenuItem>
            <MenuItem value={OrderStatus.DELIVERY}>В доставке</MenuItem>
            <MenuItem value={OrderStatus.SUCCESS}>Подтверждено</MenuItem>
            <MenuItem value={OrderStatus.CANCELED}>Отказ</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default OrderOneHeader;
