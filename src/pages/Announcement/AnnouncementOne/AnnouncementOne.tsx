import { Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import GoBackButton from "../../../components/Button/GoBackButton";
import MainBaseButton from "../../../components/Button/MainBaseButton/MainBaseButton";
import { useGetOneAnnouncementQuery } from "../../../redux/store/rtk-api/announcement-rtk/announcementEndpoints";
import AnnounceBox from "./AnnounceBox";

import AnnounceHeader from "./AnnounceHeader";
import AnnounceUserInfo from "./AnnounceUserInfo";

const AnnouncementOne = () => {
  const { announceId } = useParams();

  const { data, isLoading, isSuccess } = useGetOneAnnouncementQuery(
    announceId ? announceId : ""
  );

  return (
    <Stack spacing={4}>
      {announceId && <AnnounceHeader id={Number(announceId)} />}

      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack spacing={4}>
          <AnnounceUserInfo announceData={data} />
          <AnnounceBox aData={data} />
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default AnnouncementOne;
