import { Stack, Typography } from "@mui/material";
import AnnouncementCreateForm from "./AnnouncementCreateForm";

const AnnouncementCreate = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "common.white",
      }}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
        Создание товара
      </Typography>

      <AnnouncementCreateForm />
    </Stack>
  );
};

export default AnnouncementCreate;
