import { Stack } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import MainBaseButton from "../../../../components/Button/MainBaseButton/MainBaseButton";
import { useUpdateStatusAnnouncementMutation } from "../../../../redux/store/rtk-api/announcement-rtk/announcementEndpoints";
import { Status } from "../../../../types/Enums";

interface Props {
  id: number;
}

const AnnounceHeader: FC<Props> = ({ id }) => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/app/announcement/list");
  };

  const [updateStatus] = useUpdateStatusAnnouncementMutation();

  const handleAccept = () => {
    updateStatus({ id: id, body: { status: Status.ACCEPTED } });
  };

  const handleDenied = () => {
    updateStatus({ id: id, body: { status: Status.DENIED } });
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <MainBaseButton
        onClick={handleNavigateBack}
        bgcolor={"#fff"}
        sx={{ color: "#000", maxWidth: "150px" }}
      >
        Назад
      </MainBaseButton>

      <Stack direction="row" spacing={3}>
        <MainBaseButton
          onClick={handleAccept}
          sx={{
            backgroundColor: "#2DC36A",
            width: "200px",
            color: "#fff",
          }}
        >
          Подтвердить
        </MainBaseButton>
        <MainBaseButton
          onClick={handleDenied}
          bgcolor={"#fff"}
          sx={{
            backgroundColor: "#fff",
            width: "200px",
            color: "#767676",
          }}
        >
          Отклонить
        </MainBaseButton>
      </Stack>
    </Stack>
  );
};

export default AnnounceHeader;
