import { Box, Stack } from "@mui/material";
import { FormTitle } from "../AnnouncementCreateForm";

const AnnounceFile = () => {
  return (
    <Stack spacing={1}>
      <FormTitle title="Фото" />
      <Box
        sx={{
          backgroundColor: "secondary.light",
          width: "130px",
          height: "85px",
          borderRadius: "10px",
        }}
      />
    </Stack>
  );
};

export default AnnounceFile;
