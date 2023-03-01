import { Chip } from "@mui/material";
import { FC } from "react";
import { OrderStatus } from "../../../../types/Order/OrderStatus.enum";

interface Props {
  status: OrderStatus;
}

const StatusChip: FC<Props> = ({ status }) => {
  return (
    <Chip
      label={
        status === OrderStatus.CREATED
          ? "В ожидании"
          : status === OrderStatus.DELIVERY
          ? "В доставке"
          : status === OrderStatus.SUCCESS
          ? "Подтверждено"
          : "Отказ"
      }
      sx={{
        backgroundColor:
          status === OrderStatus.CREATED
            ? "#F6522E"
            : status === OrderStatus.DELIVERY
            ? "#D6C21A"
            : status === OrderStatus.SUCCESS
            ? "#41B619"
            : "#F6522E",
      }}
    />
  );
};

export default StatusChip;
