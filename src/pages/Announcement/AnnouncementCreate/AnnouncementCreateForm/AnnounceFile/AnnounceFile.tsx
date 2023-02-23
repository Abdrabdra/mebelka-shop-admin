import { Box, Stack } from "@mui/material";
import { FormTitle } from "../AnnouncementCreateForm";
import ListImages from "./ListImages";
import UploadFile from "./UploadFile";

const AnnounceFile = () => {
  return (
    <Stack spacing={1}>
      <FormTitle title="Фото" />
      <Stack direction="row" spacing={3} alignItems="center">
        <UploadFile />
        <ListImages />
      </Stack>
    </Stack>
  );
};

export default AnnounceFile;
