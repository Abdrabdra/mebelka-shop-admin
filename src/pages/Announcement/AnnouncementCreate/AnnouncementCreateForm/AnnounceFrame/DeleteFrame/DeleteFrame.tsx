import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FormTitle } from "../../AnnouncementCreateForm";

import CloseIcon from "@mui/icons-material/Close";
import { IFrames } from "../../../../../../types/Announcement/OneAnnouncement.type";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useDeleteProductFrameMutation } from "../../../../../../redux/store/rtk-api/product-rtk/productEndpoints";

interface Props {
  untouchedData: IFrames[];
}

const DeleteFrame: FC<Props> = ({ untouchedData }) => {
  const params = useParams();

  const { announceId } = params;

  const [deleteValue] = useDeleteProductFrameMutation();

  const handleDelete = (id: number) => {
    {
      announceId && deleteValue({ productId: Number(announceId), frameId: id });
    }
  };

  return (
    <Stack spacing={1}>
      <Typography>Удалить Выбранный каркас</Typography>

      <Stack
        sx={{
          width: "200px",
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "15px",
        }}
      >
        {untouchedData &&
          untouchedData.map((row) => (
            <Stack
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
              key={row.id}
            >
              <Stack direction={"row"} spacing={1} alignItems="center">
                <Typography>{row.title}</Typography>
              </Stack>
              <IconButton onClick={() => handleDelete(row.id)}>
                <CloseIcon />
              </IconButton>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export default DeleteFrame;
