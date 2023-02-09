import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import ChipStatus from "../../../../components/Chip/ChipStatus";
import { IOneAnnouncementResponse } from "../../../../types/Announcement/OneAnnouncement.type";

interface Props {
  announceData: IOneAnnouncementResponse;
}

const AnnounceUserInfo: FC<Props> = ({ announceData }) => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      spacing={2}
      sx={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
      }}
    >
      <Stack direction="row" spacing={3}>
        <Box
          sx={{
            width: "160px",
            height: "160px",
            borderRadius: "10px",
            backgroundColor: "#E2E2E2",
          }}
        />
        <Stack>
          <Typography sx={{ fontSize: "20px", color: "#A8A8A8" }}>
            О Магазине
          </Typography>
          <Typography>{announceData.a.author.firstName}</Typography>
        </Stack>
      </Stack>

      <Stack>
        <Typography sx={{ fontSize: "20px", color: "#A8A8A8" }}>
          Статус
        </Typography>
        <ChipStatus status={announceData.a.status} />
      </Stack>

      <Stack>
        <Stack>
          <Typography sx={{ fontSize: "16px", color: "#A8A8A8" }}>
            Номер телефона
          </Typography>
          <Typography>{announceData.a.author.user.phone}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AnnounceUserInfo;
