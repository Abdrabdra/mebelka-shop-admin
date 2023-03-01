import { Stack, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  data: any;
}

const ClientBox: FC<Props> = ({ data }) => {
  return (
    <Stack spacing={2}>
      <Typography>Информация о Кленте</Typography>
      <Stack
        sx={{
          backgroundColor: "secondary.light",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <Stack>
          <Typography>Клиент: Клиент</Typography>
          <Typography>Клиент: Клиент</Typography>
          <Typography>Клиент: Клиент</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ClientBox;
