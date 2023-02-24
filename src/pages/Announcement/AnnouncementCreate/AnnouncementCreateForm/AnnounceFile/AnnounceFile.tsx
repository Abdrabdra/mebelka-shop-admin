import { Box, Stack } from "@mui/material";
import { FC } from "react";
import { IImages } from "../../../../../types/Announcement/OneAnnouncement.type";
import { FormTitle } from "../AnnouncementCreateForm";
import ListImages from "./ListImages";
import UploadFile from "./UploadFile";

interface Props {
  prevData?: IImages[];
}

const AnnounceFile: FC<Props> = ({ prevData }) => {
  return (
    <Stack spacing={1}>
      <FormTitle title="Фото" />
      <Stack direction="row" spacing={3} alignItems="center">
        <UploadFile />
        <ListImages prevData={prevData} />
      </Stack>
    </Stack>
  );
};

export default AnnounceFile;
