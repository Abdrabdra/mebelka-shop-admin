import { Chip } from "@mui/material";
import { FC } from "react";
import { Status } from "../../../types/Enums";

interface Props {
  status: Status;
}

const ChipStatus: FC<Props> = ({ status }) => {
  return (
    <Chip
      label={
        status === Status.NEW
          ? "Новый"
          : status === Status.DENIED
          ? "Не подтверждено"
          : status === Status.ACCEPTED
          ? "Подтверждено"
          : "Удалено"
      }
      sx={{
        maxWidth: "175px",
        color: "#FFF",
        borderRadius: "5px",
        height: "40px",
        fontSize: "16px",
        fontWeight: "600",
        backgroundColor:
          status === Status.NEW
            ? "#222222"
            : status === Status.DENIED
            ? "#F40000"
            : status === Status.ACCEPTED
            ? "#2DC36A"
            : "secondary.light",
      }}
    />
  );
};

export default ChipStatus;
