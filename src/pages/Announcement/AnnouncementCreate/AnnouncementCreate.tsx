import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainBaseButton from "../../../components/Button/MainBaseButton/MainBaseButton";
import { announceReset } from "../../../redux/store/reducers/announce/announce.slice";
import AnnouncementCreateForm from "./AnnouncementCreateForm";

const AnnouncementCreate = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/app/announcement/list");
  };

  useEffect(() => {
    dispatch(announceReset());
  }, []);

  return (
    <Stack spacing={3}>
      <MainBaseButton
        onClick={handleNavigateBack}
        bgcolor={"#fff"}
        sx={{ color: "#000", maxWidth: "150px" }}
      >
        Назад
      </MainBaseButton>
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
    </Stack>
  );
};

export default AnnouncementCreate;
